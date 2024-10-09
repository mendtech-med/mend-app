'use server';
export const maxDuration = 60;
export const dynamic = 'force-dynamic';
import { bedrock } from '@/server/infrastructure/aws/bedrock.infra';
import { streamText } from 'ai';
import { createStreamableValue } from 'ai/rsc';
import { generateText } from 'ai';
import ProjectService from '@/server/domain/services/project.service';
import ProjectRepository from '@/server/repositories/project.repository';
import { auth } from '@clerk/nextjs/server'

const blogService = new ProjectService(new ProjectRepository());


const updateContent = async (content: string, blogId: string) => {
    const { userId } = auth();

    if (!userId) {
        throw new Error('User not authenticated');
    }

    const blog = await blogService.update({
        content: content,
        ownerId: userId,
        id: blogId
    })

    if (!blog) {
        throw new Error('Could not update blog');
    }

    return blog;
}

export default updateContent;