import { CreateBrandVoiceUseCase } from "../use-cases/brand-voice/create.case";
import { GetBrandVoiceUseCase } from "../use-cases/brand-voice/get.case";
import { CreateBrandVoiceDto } from "../dto/brand-voice/create.dto";
import { GetBrandVoiceDto } from "../dto/brand-voice/get.dto";
import { UpdateBrandVoiceDto } from "../dto/brand-voice/update.dto";
import { DeleteBrandVoiceUseCase } from "../use-cases/brand-voice/delete.case";
import { DeleteBrandVoiceDto } from "../dto/brand-voice/delete.dto";
import logger from "../../infrastructure/logging/logger";
import { auth } from '@clerk/nextjs/server'

export class BrandVoiceController {

    constructor(private getBrandVoiceUseCase: GetBrandVoiceUseCase,
        private createBrandVoiceUseCase: CreateBrandVoiceUseCase,
        private deleteBrandVoiceUseCase: DeleteBrandVoiceUseCase,
    ) { }

    async createBrandVoice(req: Request, res: Response) {
        const createBrandVoiceDto: CreateBrandVoiceDto = await req.json() as CreateBrandVoiceDto;
        const { userId } = auth();

        if (!userId) {
            return new Response('Unauthorized', { status: 401 })
        }

        logger.info("get brandVoices user : " + userId);

        try {
            // complete the createBrandVoiceDto with the userId from the request
            createBrandVoiceDto.ownerId = userId;
            // create the brandVoice
            const brandVoice = await this.createBrandVoiceUseCase.execute(createBrandVoiceDto);
            return Response.json(brandVoice);
        } catch (error: any) {
            return new Response(JSON.stringify({ message: error?.message ?? "An error occurred" }), { status: 400 });
        }
    }

    async getBrandVoices(req: Request, { params }: { params: { brandVoiceId: string | undefined } }) {
        // const { userId: realId } = auth();
        // logger.info('Real User ID: ' + realId);
        const { userId } = auth();

        if (!userId) {
            return new Response('Unauthorized', { status: 401 })
        }

        logger.info("get brandVoices user : " + userId);
        const { brandVoiceId } = params || {};

        try {
            const brandVoices = await this.getBrandVoiceUseCase.execute({ id: brandVoiceId, userId });
            return Response.json(brandVoices);
        } catch (error: any) {
            return new Response(JSON.stringify({ message: error?.message ?? "An error occurred" }), { status: 400 });
        }
    }


    async deleteBrandVoice(req: Request, res: Response) {

        // TODO: const userId = req.auth.userId;

        const { userId } = auth();

        if (!userId) {
            return new Response('Unauthorized', { status: 401 })
        }

        logger.info("get brandVoices user : " + userId);

        const { id }: DeleteBrandVoiceDto = req.body as unknown as DeleteBrandVoiceDto;
        try {
            const brandVoice = await this.deleteBrandVoiceUseCase.execute({ id, ownerId: userId });
            return Response.json(brandVoice);
        } catch (error: any) {
            return new Response(JSON.stringify({ message: error?.message ?? "An error occurred" }), { status: 400 });
        }
    }

}