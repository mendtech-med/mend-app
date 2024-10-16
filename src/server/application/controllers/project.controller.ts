import { CreateProjectUseCase } from "../use-cases/project/create.case";
import { GetProjectUseCase } from "../use-cases/project/get.case";
import { CreateProjectDto } from "../dto/project/create.dto";
import { GetProjectDto } from "../dto/project/get.dto";
import { UpdateUpdateUseCase } from "../use-cases/project/update.case";
import { UpdateProjectDto } from "../dto/project/update.dto";
import { DeleteProjectUseCase } from "../use-cases/project/delete.case";
import { DeleteProjectDto } from "../dto/project/delete.dto";
import logger from "../../infrastructure/logging/logger";
import { LastUpdatedProjectsUseCase } from "../use-cases/project/last-updated.case";
import { auth } from '@clerk/nextjs/server'

export class ProjectController {

    constructor(private getProjectUseCase: GetProjectUseCase,
        private createProjectUseCase: CreateProjectUseCase,
        private updateProjectUseCase: UpdateUpdateUseCase,
        private deleteProjectUseCase: DeleteProjectUseCase,
        private lastUpdatedProjectsUseCase: LastUpdatedProjectsUseCase
    ) { }

    async createProject(req: Request, res: Response) {
        const createProjectDto: CreateProjectDto = await req.json() as CreateProjectDto;
        const { userId } = auth();

        if (!userId) {
            return new Response('Unauthorized', { status: 401 })
        }

        logger.info("get projects user : " + userId);

        try {
            // complete the createProjectDto with the userId from the request
            createProjectDto.ownerId = userId;
            // create the project
            const project = await this.createProjectUseCase.execute(createProjectDto);
            return Response.json(project);
        } catch (error: any) {
            return new Response(JSON.stringify({ message: error?.message ?? "An error occurred" }), { status: 400 });
        }
    }

    async getProjects(req: Request, { params }: { params: { projectId: string } }) {
        // const { userId: realId } = auth();
        // logger.info('Real User ID: ' + realId);
        const { userId } = auth();

        if (!userId) {
            return new Response('Unauthorized', { status: 401 })
        }

        logger.info("get projects user : " + userId);
        const { projectId } = params;

        try {
            const projects = await this.getProjectUseCase.execute({ id: projectId, userId });
            return Response.json(projects);
        } catch (error: any) {
            return new Response(JSON.stringify({ message: error?.message ?? "An error occurred" }), { status: 400 });
        }
    }


    async updateProject(req: Request, res: Response) {

        const { userId } = auth();


        if (!userId) {
            return new Response('Unauthorized', { status: 401 })
        }

        logger.info("get projects user : " + userId);

        const updateProjectDto: UpdateProjectDto = req.body as unknown as UpdateProjectDto;

        try {
            // complete the updateProjectDto with the userId from the request
            updateProjectDto.ownerId = userId;
            // update the project
            const project = await this.updateProjectUseCase.execute(updateProjectDto);
            return Response.json(project);
        } catch (error: any) {
            return new Response(JSON.stringify({ message: error?.message ?? "An error occurred" }), { status: 400 });
        }
    }

    async deleteProject(req: Request, res: Response) {

        // TODO: const userId = req.auth.userId;

        const { userId } = auth();

        if (!userId) {
            return new Response('Unauthorized', { status: 401 })
        }

        logger.info("get projects user : " + userId);

        const { id }: DeleteProjectDto = await req.json() as unknown as DeleteProjectDto;
        try {
            const project = await this.deleteProjectUseCase.execute({ id, ownerId: userId });
            return Response.json(project);
        } catch (error: any) {
            return new Response(JSON.stringify({ message: error?.message ?? "An error occurred" }), { status: 400 });
        }
    }


    async lastUpdatedProjects(req: Request, res: Response) {
        const { userId } = auth();

        if (!userId) {
            return new Response('Unauthorized', { status: 401 })
        }

        logger.info("get projects user : " + userId);

        try {
            const projects = await this.lastUpdatedProjectsUseCase.execute({ userId });
            return Response.json(projects);
        } catch (error: any) {
            return new Response(JSON.stringify({ message: error?.message ?? "An error occurred" }), { status: 400 });
        }

    }


}