import { CreateReferUseCase } from "../use-cases/refer/create.case";
import { GetReferUseCase } from "../use-cases/refer/get.case";
import { CreateReferDto } from "../dto/refer/create.dto";
import { GetReferDto } from "../dto/refer/get.dto";
import { UpdateUpdateUseCase } from "../use-cases/refer/update.case";
import { UpdateReferDto } from "../dto/refer/update.dto";
import { DeleteReferUseCase } from "../use-cases/refer/delete.case";
import { DeleteReferDto } from "../dto/refer/delete.dto";
import logger from "../../infrastructure/logging/logger";
import { auth } from "@clerk/nextjs/server";

export class ReferController {

    constructor(private getReferUseCase: GetReferUseCase,
        private createReferUseCase: CreateReferUseCase,
        private deleteReferUseCase: DeleteReferUseCase
    ) { }

    async createRefer(req: Request, res: Response) {
        const createReferDto: CreateReferDto = await req.json() as CreateReferDto;
        // TODO: const userId = req.auth.userId;
        const { userId } = auth();
        // const userId = "user_2mr1YjrIwUDoyisP94HaiRm3QXS";

        if (!userId) {
            return new Response('Unauthorized', { status: 401 })
        }

        logger.info("get refers user : " + userId);

        try {
            // create the refer
            const refer = await this.createReferUseCase.execute(createReferDto);
            return Response.json(refer);
        } catch (error: any) {
            logger.error("Error creating refer", error);
            return new Response(JSON.stringify({ message: error?.message ?? "An error occurred" }), { status: 400 });
        }
    }

    async getRefers(req: Request, { params }: { params: GetReferDto }) {
        // TODO: const userId = req.auth.userId;
        const { userId } = auth();
        // const userId = "user_2mr1YjrIwUDoyisP94HaiRm3QXS";

        if (!userId) {
            return new Response('Unauthorized', { status: 401 })
        }
        logger.info("get refers user : " + userId);

        const { projectId }: GetReferDto = params;

        try {
            const refers = await this.getReferUseCase.execute({ projectId });
            return Response.json(refers);
        } catch (error: any) {
            return new Response(JSON.stringify({ message: error?.message ?? "An error occurred" }), { status: 400 });
        }
    }

    async deleteRefer(req: Request, res: Response) {

        // TODO: const userId = req.auth.userId;
        const { userId } = auth();

        if (!userId) {
            return new Response('Unauthorized', { status: 401 })
        }

        logger.info("get refers user : " + userId);

        const { id }: DeleteReferDto = req.body as unknown as DeleteReferDto;
        try {
            const refer = await this.deleteReferUseCase.execute({ id, projectId: userId });
            return Response.json(refer);
        } catch (error: any) {
            return new Response(JSON.stringify({ message: error?.message ?? "An error occurred" }), { status: 400 });
        }
    }


}