'use server';
import { azureOpenai } from '@/server/infrastructure/azure/openai.infra';
import { streamText } from 'ai';
import { createStreamableValue } from 'ai/rsc';
import { generateText } from 'ai';
import BrandVoiceService from '@/server/domain/services/brand-voice.service';
import BrandVoiceRepository from '@/server/repositories/brand-voice.repository';
import { auth } from '@clerk/nextjs/server'
import { any } from 'zod';

const brandVoiceService = new BrandVoiceService(new BrandVoiceRepository());


const model  = azureOpenai("gpt-4o");



const promptFormater = (prompt: string) => {
    return `\n\nHuman:\n  ${prompt}\n\nAssistant:\n`
}





const promptFormatted = ({ title, targetAudience, targetAudienceLevel, brandVoice }: 
    { title: string, targetAudience: string, targetAudienceLevel: string, brandVoice: any }) => {
    return `  <task>
    Generate a news on the following topic: “${title}”.
  </task>
  
  <instructions>
    You're a marketing news generator assistant. Your task is to create a news post.
    
    You strictly need to follow the below instructions while generating the news:
    1. The news needs to be generated for a targeted audience.
    2. The targeted audience for this will be from the ${targetAudience} industry.
    3. There can be multiple levels of audience. Example:
        * 'Entry Level'
        * 'Mid Level'
        * 'Senior Level'
        * 'Manager Level'
        * 'Director Level'
        * 'VP Level'
        * 'Senior VP Level'
        * 'Executive Level'
        * 'C-Level'
        * 'Owner'
        * 'Other'
    4. The average level of the targeted audience for this news is “${targetAudienceLevel}”.
    5. The news should have certain attributes in its brand voice. The brand voice attributes are given in the <brandvoice></brandvoice> tags below:
        <brandvoice>${brandVoice}</brandvoice>
    6. The news should be have A Flesch reading ease score of at least 60-70.
    7. The ideal length of a marketing news post is 1500-2000 words, but the minimum acceptable length is 500 words.
    8. The news content should be in the HTML format so that WYSIWYG editors can render the content.
    9. The output must not include the title “${title}” in the beginning.
    10. The output must use appropriate html tags like: h1, h2, h3, p, ul, ol, li, a, img, blockquote, strong, em, code, pre, table, tr, th, td, hr, br.
    11. The output must not have the following HTML tags: HTML, body.
    12. Start generating the output directly. Do not mention mention the instructions given to you.
  </instructions>
`
};



const referPromptFormatted = ({ title, referContent, selection, targetAudience, targetAudienceLevel, brandVoice }: { title: string, referContent: string, selection: string, targetAudience: string, targetAudienceLevel: string, brandVoice: string }) => {
    return `
            Task : Rewrite the following SelectedText using the referContent.
            
            
            referContent: ${referContent}
            SelectedText: ${selection}


            <instructions>
            Create a single coherent sentence that logically combines the key information from both texts, maintaining cause and effect relationships where relevant. The combined text should flow naturally and avoid redundancy.

            Try to keep the length of the output no more than 200% of the 'SelectedText'. Here are your step by step instructions -
            1. The targeted audience will be from the ${targetAudience} industry.
            3. The average level of the targeted audience for this news is “${targetAudienceLevel}”.
            4. The news should have certain attributes in its brand voice. The brand voice attributes are given in the <brandvoice></brandvoice> tags below:
            <brandvoice>${brandVoice}</brandvoice>
            5. The text should have A Flesch reading ease score of at least 60-70.
            6. The ideal length of the generated text should be no more than 200% of the 'SelectedText'.
            7. The text SelectedText should be in the HTML format so that WYSIWYG editors can render the SelectedText.
            8. The output must not include the title “${title}” in the beginning.
            9. The output must use appropriate html tags like: p, ul, ol, li, a, img, blockquote, strong, em, code, pre, table, tr, th, td, hr, br.
            10. The output must not have the following HTML tags: HTML, body.
            11. Start generating the output directly. Do not mention the instructions given to you or what you do with the SelectedText.
            12. You only rewrite the SelectedText given in the <SelectedText></SelectedText> tags above and not generate the entire news.
            13. You start writing directly, no intro or conclusion is needed.
            14. Recheck that you have followed all the instructions before giving the final results 
            </instructions>

            `
}




export async function generate({ title, targetAudience, targetAudienceLevel, brandVoiceId }: { title: string, targetAudience: string, targetAudienceLevel: string, brandVoiceId: string }) {
    const stream = createStreamableValue('');

    const { userId } = auth();

    if (!userId) {
        throw new Error('Unauthorized');
    }

    const brandVoice = await brandVoiceService.get({
        id: brandVoiceId,
        userId: userId
    });

    (async () => {
        const { textStream } = await streamText({
            model : model,
            prompt: promptFormater(promptFormatted({ title, targetAudience, targetAudienceLevel, brandVoice })),
            maxTokens: 2048,
            temperature: 0.5,
            topP: 1,
        });

        for await (const delta of textStream) {
            stream.update(delta);
        }

        stream.done();
    })();

    return { output: stream.value };
};

export async function generateNonStream({ title, targetAudience, targetAudienceLevel, brandVoiceId }: { title: string, targetAudience: string, targetAudienceLevel: string, brandVoiceId: string }) {

    const { userId } = auth();

    if (!userId) {
        throw new Error('Unauthorized');
    }

    const brandVoice = await brandVoiceService.get({
        id: brandVoiceId,
        userId: userId
    });

    if (!brandVoice) {
        throw new Error('Brand voice not found');
    }


    const { text } = await generateText({
        model,
        prompt: promptFormater(promptFormatted({ title, targetAudience, targetAudienceLevel, brandVoice: JSON.stringify(brandVoice) })),
        maxTokens: 2048,
        temperature: 0.5,
        topP: 1,
    });

    return { text };
};

export async function reWriteSelectionUsingRefer({ title, referContent, selection, targetAudience, targetAudienceLevel, brandVoice }: { title: string, referContent: string, selection: string, targetAudience: string, targetAudienceLevel: string, brandVoice: string }) {
    
    console.log("reWriteSelectionUsingRefer : ", selection);
    
    const { text } = await generateText({
        model,
        prompt: promptFormater(referPromptFormatted({ title, referContent, selection, targetAudience, targetAudienceLevel, brandVoice })),
        maxTokens: 2048,
        temperature: 0.5,
        topP: 1,
    });

    return { text };
}