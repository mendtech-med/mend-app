'use server';
import { azureOpenai } from '@/server/infrastructure/azure/openai.infra';
import { generateText } from 'ai';
import BrandVoiceService from '@/server/domain/services/brand-voice.service';
import BrandVoiceRepository from '@/server/repositories/brand-voice.repository';
import { auth } from '@clerk/nextjs/server';
import { formatGeneratePrompt } from './prompt-formatter';
import { CustomError } from './errors/error-handler';
import type { GenerateParams } from './types';

const brandVoiceService = new BrandVoiceService(new BrandVoiceRepository());
const model = azureOpenai("gpt-4o");

export async function generateBlogNonStream(params: GenerateParams) {
    const { userId } = auth();

    if (!userId) {
        throw new CustomError('Unauthorized', 401);
    }

    let brandVoice;
    try {
        brandVoice = await brandVoiceService.get({
            id: params.brandVoiceId,
            userId: userId
        });
    } catch (error) {
        throw new CustomError('Failed to retrieve brand voice', 500, error);
    }

    if (!brandVoice) {
        throw new CustomError('Brand voice not found', 404);
    }

    try {
        const prompt = formatGeneratePrompt({
            title: params.title,
            targetAudience: params.targetAudience,
            targetAudienceLevel: params.targetAudienceLevel,
            brandVoice: brandVoice,
        });

        const { text } = await generateText({
            model,
            prompt: prompt,
            maxTokens: 2048,
            temperature: 0.5,
            topP: 1,
        });

        return { text };
    } catch (error) {
        console.error('Error during non-streaming text generation:', error);
        throw new CustomError('Failed to generate blog content', 500, error);
    }
};
