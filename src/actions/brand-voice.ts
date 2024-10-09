'use server';
import { bedrock } from '@/server/infrastructure/aws/bedrock.infra';
import { streamText } from 'ai';
import { createStreamableValue } from 'ai/rsc';
import { generateText } from 'ai';
import BrandVoiceService from '@/server/domain/services/brand-voice.service';
import BrandVoiceRepository from '@/server/repositories/brand-voice.repository';
import { auth } from '@clerk/nextjs/server'

const brandVoiceService = new BrandVoiceService(new BrandVoiceRepository());

const promptFormater = (prompt: string) => {
    return `\n\nHuman:\n  ${prompt}\n\nAssistant:\n`
}

const model = bedrock('anthropic.claude-3-sonnet-20240229-v1:0');


const brandVoicePrompt = (content: string) => {
    return {
        TEXT: `
      <document>
        ${content}
      </document>
      <instructions>
        You are a brand voice assistant. Your goal is to analyze the given document and generate a unique brand voice that captures the essence of the brand.
  
        The brand voice should contain the following attributes:
  
        - Tone: The emotional style of the voice. Choose descriptive words like witty, sincere, authoritative.
  
        - Personality: The core traits that reflect the brand's character. Choose descriptive words like innovative, reliable, artistic.  
  
        - Language Style: The structural and word choices that determine how the brand expresses itself. Choose descriptors like conversational, formal, punchy.
  
        - Point of View: The perspective the brand takes when communicating. Choose from educational, conversational, customer-focused. 
  
        - Clarity: How clearly and unambiguously the voice communicates. Ensure the voice is clear and easy to understand.
  
        - Distinctiveness: Unique verbal and tonal qualities that differentiate the brand voice from competitors. Strive for an original voice. 
  
        - Audience-Focused: Communicate directly to the needs and interests of the target audience. Keep the audience in mind.
  
        - Accessibility: How easy and inviting the voice is for audiences to engage with. Make the voice friendly and approachable.
  
        - Adaptability: The ability of the voice to flex across contexts while retaining brand consistency. Make the voice versatile.
  
        Generate the brand voice in the following JSON format:
  
        \`\`\`
        {
          "tone": [""],
          "personality": [""],  
          "languageStyle": [""],
          "pointOfView": [""],
          "clarity": [""],
          "distinctiveness": [""],
          "audienceFocused": [""],
          "accessibility": [""],
          "adaptability": [""],
          "consistency" : [""]
        }
        \`\`\`
  
        Only provide the JSON code with no additional text. Analyze the input document carefully to produce an accurate brand voice.
      </instructions>
      `,
        URL: `Generate a brand voice from this blog. ${content} The output should be in the following JSON format and should only contain the JSON code. \`\`\` { tone: String[], personality: { type: [String], required: true }, languageStyle: { type: [String], required: true }, pointOfView: { type: [String], required: true }, consistency: { type: [String], required: true }, clarity: { type: [String], required: true }, distinctiveness: { type: [String], required: true }, audienceFocused: { type: [String], required: true }, accessibility: { type: [String], required: true }, adaptability: { type: [String], required: true } } \`\`\``,
    };
};

export async function generateBrandVoiceNonStream({ name, content }: { name: string, content: string }) {
    const { userId } = auth();

    if (!userId) {
        throw new Error('Unauthorized');
    }
    const prompt: string = brandVoicePrompt(content).TEXT;
    console.log("prompt : ", prompt);
    const { text } = await generateText({
        model,
        prompt: promptFormater(prompt),
        maxTokens: 2048,
        temperature: 0.5,
        topK: 250,
        topP: 1,
        stopSequences: ['\\n\\nHuman:'],
    });

    if (text !== '') {
        try {
            const brandVoice = JSON.parse(text);
            console.log("generated brandVoice : ", JSON.stringify(brandVoice));

            await brandVoiceService.create({
                name,
                tone: brandVoice.tone,
                personality: brandVoice.personality,
                languageStyle: brandVoice.languageStyle,
                pointOfView: brandVoice.pointOfView,
                consistency: brandVoice.consistency,
                clarity: brandVoice.clarity,
                distinctiveness: brandVoice.distinctiveness,
                audienceFocused: brandVoice.audienceFocused,
                accessibility: brandVoice.accessibility,
                adaptability: brandVoice.adaptability,
                ownerId: userId
            });
            return { text };
        } catch (error) {
            console.log("error : ", error);
            return null;
        }
    }
    return null;
};
