'use server';

import { azureOpenai } from '@/server/infrastructure/azure/openai.infra';
import { streamText } from 'ai';
import { createStreamableValue } from 'ai/rsc';
import BrandVoiceService from '@/server/domain/services/brand-voice.service';
import BrandVoiceRepository from '@/server/repositories/brand-voice.repository';
import { auth } from '@clerk/nextjs/server';
import { formatGeneratePrompt } from './prompt-formatter';
import { CustomError } from './errors/error-handler';
import type { GenerateParams } from './types';

const brandVoiceService = new BrandVoiceService(new BrandVoiceRepository());
const model = azureOpenai("gpt-4o");

export async function generateBlog(params: GenerateParams) {
    const stream = createStreamableValue('');

    const { userId } = auth();

    if (!userId) {
        throw new CustomError('Unauthorized', 401);
    }

    let brandVoice = await brandVoiceService.get({
        id: params.brandVoiceId,
        userId: userId
    });


    if (!brandVoice) {
        throw new CustomError('Brand voice not found', 404);
    }

    (async () => {
        try {
            const prompt = formatGeneratePrompt({
                title: params.title,
                targetAudience: params.targetAudience,
                targetAudienceLevel: params.targetAudienceLevel,
                brandVoice: brandVoice
            });

            const { textStream } = await streamText({
                model: model,
                prompt: prompt,
                maxTokens: 2048,
                temperature: 0.5,
                topP: 1,
            });

            for await (const delta of textStream) {
                stream.update(delta);
            }

            stream.done();
        } catch (error) {
            console.error('Error during streaming text:', error);
            stream.update('An error occurred while generating the blog. Please try again later.');
            stream.done();
        }
    })();

    return { output: stream.value };
};
