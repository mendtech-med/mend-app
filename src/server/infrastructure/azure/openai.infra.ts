// import { createAzure } from '@ai-sdk/azure';
import { createOpenAI } from '@ai-sdk/openai';
import { createAzure } from '@ai-sdk/azure';

const azureOpenai = createAzure({
    apiKey: process.env.AZURE_OPENAI_API_KEY, // Azure API key
    headers: {
        'api-key': process.env.AZURE_OPENAI_API_KEY ?? '',
    },
    resourceName: process.env.AZURE_OPENAI_RESOURCE,
});



// const azureOpenai = createOpenAI({
//     apiKey: process.env.AZURE_OPENAI_API_KEY, 
//     baseURL: `https://${process.env.AZURE_OPENAI_RESOURCE}.openai.azure.com/openai/deployments/${process.env.AZURE_OPENAI_DEPLOYMENT_ID}/chat/completions?api-version=${process.env.AZURE_OPENAI_API_VERSION}`,
//     compatibility : "strict",
//     headers: {
//         'api-key': process.env.AZURE_OPENAI_API_KEY ?? '',
//     },
// });

export { azureOpenai };