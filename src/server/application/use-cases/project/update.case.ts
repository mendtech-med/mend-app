import ProjectService from "../../../domain/services/project.service";
import Project from "../../../domain/entities/project.entity";
import { UpdateProjectDto , UpdateProjectSchema } from "../../dto/project/update.dto";

export class UpdateUpdateUseCase {
    constructor(private projectService: ProjectService) { }

    async execute(project: UpdateProjectDto): Promise<Project> {

        const validationResult = UpdateProjectSchema.safeParse(project);

        if (!validationResult.success) {
            throw new Error(JSON.stringify(validationResult.error));
        }

        return await this.projectService.update(validationResult.data);
    }
}

