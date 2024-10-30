'use server';

import { azureOpenai } from '@/server/infrastructure/azure/openai.infra';
import { generateText } from 'ai';
import { auth } from '@clerk/nextjs/server';
import { formatRewritePrompt } from './prompt-formatter';
import { CustomError } from './errors/error-handler';
import type { ReWriteParams } from './types';

const model = azureOpenai("gpt-4o");

export async function rewriteSelection(params: ReWriteParams) {
    const { userId } = auth();

    if (!userId) {
        throw new CustomError('Unauthorized', 401);
    }

    // Optionally, you can fetch and verify brandVoice here if needed
    // Assuming brandVoice is passed as a string in params

    try {
        const prompt = formatRewritePrompt({
            title: params.title,
            referContent: params.referContent,
            selection: params.selection,
            targetAudience: params.targetAudience,
            targetAudienceLevel: params.targetAudienceLevel,
            brandVoice: params.brandVoice,
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
        console.error('Error during rewriting selection:', error);
        throw new CustomError('Failed to rewrite selection', 500, error);
    }
};
