//#######################################
// business logic
// eg: no more than 1 Chatbot for user in free trail
//#######################################


import { CreateProjectDto } from "../../application/dto/project/create.dto";
import { GetProjectDto } from "../../application/dto/project/get.dto";
import { UpdateProjectDto } from "../../application/dto/project/update.dto";
import { DeleteProjectDto } from "../../application/dto/project/delete.dto";
import { LastUpdatedProjectsDto } from "../../application/dto/project/last-updated.dto";
import Project from "../entities/project.entity";
import { IProjectRepository } from "../repositories/project.interface";

class ProjectService {
    constructor(private projectRepository: IProjectRepository) { }

    async create(project: CreateProjectDto): Promise<Project> {
        return await this.projectRepository.create({
            name: project.name,
            ownerId: project.ownerId
        });
    }


    async update(project: UpdateProjectDto): Promise<Project> {

        // check if project exists
        const projectExists = await this.projectRepository.projectExists(project.id);
        if (!projectExists) {
            throw new Error("Project does not exist");
        }

        // check if project belongs to owner
        const projectBelongsToOwner = await this.projectRepository.projectBelongsToOwner(project.id, project.ownerId);

        if (!projectBelongsToOwner) {
            throw new Error("Project does not belong to owner");
        }

        return await this.projectRepository.update({
            id: project.id,
            name: project.name,
        });
    }

    async get({ id, userId }: GetProjectDto): Promise<Project[]> {

        // check if project exists
        const belongsToOwner = id ? await this.projectRepository.projectBelongsToOwner(id, userId) : true;

        if (!belongsToOwner) {
            throw new Error("Project does not belong to owner");
        }

        return await this.projectRepository.find({ id, userId });
    }

    async delete({ id, ownerId }: DeleteProjectDto): Promise<Project> {
        // check if project exists
        const projectExists = await this.projectRepository.projectExists(id);
        if (!projectExists) {
            throw new Error("Project does not exist");
        }

        // check if project has resources
        const belongsToOwner = await this.projectRepository.projectBelongsToOwner(id, ownerId);
        if (!belongsToOwner) {
            throw new Error("Project does not belong to owner");
        }
        return await this.projectRepository.delete({ id });
    }

    async lastUpdatedProjects({ userId  }: LastUpdatedProjectsDto): Promise<Project[]> {
        const limit = 3;
        return await this.projectRepository.lastUpdatedProjects({ userId, limit });
    }


}

export default ProjectService;