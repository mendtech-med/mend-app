import ProjectService from "../../../domain/services/project.service";
import Project from "../../../domain/entities/project.entity";
import { DeleteProjectDto, DeleteProjectSchema } from "../../dto/project/delete.dto";

export class DeleteProjectUseCase {
    constructor(private projectService: ProjectService) { }

    async execute({ id , ownerId }: DeleteProjectDto): Promise<Project> {

        const validationResult = DeleteProjectSchema.safeParse({ id , ownerId });

        if (!validationResult.success) {
            throw new Error(JSON.stringify(validationResult.error));
        }

        return await this.projectService.delete(validationResult.data);
    }
}

