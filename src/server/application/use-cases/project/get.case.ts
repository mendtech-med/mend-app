import ProjectService from "../../../domain/services/project.service";
import Project from "../../../domain/entities/project.entity";
import { GetProjectDto } from "../../dto/project/get.dto";
import { GetProjectSchema } from "../../dto/project/get.dto";

export class GetProjectUseCase {
    constructor(private projectService: ProjectService) { }



    async execute({ id, userId }: GetProjectDto): Promise<Project[]> {
        const validationResult = GetProjectSchema.safeParse({ id, userId });

        if (!validationResult.success) {
            throw new Error(JSON.stringify(validationResult.error));
        }
        return await this.projectService.get({ id, userId });
    }
}

