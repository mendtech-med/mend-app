import ProjectService from "../../../domain/services/project.service";
import Project from "../../../domain/entities/project.entity";
import { GetProjectDto } from "../../dto/project/get.dto";
import { GetProjectSchema } from "../../dto/project/get.dto";
import { LastUpdatedProjectsDto, LastUpdatedProjectsSchema } from "../../dto/project/last-updated.dto";

export class LastUpdatedProjectsUseCase {
    constructor(private projectService: ProjectService) { }



    async execute({ userId }: LastUpdatedProjectsDto): Promise<Project[]> {
        const validationResult = LastUpdatedProjectsSchema.safeParse({ userId });

        if (!validationResult.success) {
            throw new Error(JSON.stringify(validationResult.error));
        }
        return await this.projectService.lastUpdatedProjects({ userId });
    }
}

