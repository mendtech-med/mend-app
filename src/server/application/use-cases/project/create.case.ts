import ProjectService from "../../../domain/services/project.service";
import Project from "../../../domain/entities/project.entity";
import { CreateProjectDto, CreateProjectSchema } from "../../dto/project/create.dto";

export class CreateProjectUseCase {
    constructor(private projectService: ProjectService) { }

    async execute(project: CreateProjectDto): Promise<Project> {

        const validationResult = CreateProjectSchema.safeParse(project);

        if (!validationResult.success) {
            throw new Error(JSON.stringify(validationResult.error));
        }

        return await this.projectService.create(validationResult.data);
    }
}

