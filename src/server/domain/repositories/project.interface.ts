import Project from "../entities/project.entity";
import User from "../entities/user.entity";
import {CreateProjectDto , DeleteProjectDto , FindProjectDto , UpdateProjectDto , LastUpdatedProjectsDto } from "./project.dto";

export interface IProjectRepository {
    // crud
    find({ id }: FindProjectDto): Promise<Project[]>;
    create(project: CreateProjectDto): Promise<Project>;
    update(project: UpdateProjectDto): Promise<Project>;
    delete({ id }: DeleteProjectDto): Promise<Project>;
    // three last updated projects
    lastUpdatedProjects({ userId, limit }: LastUpdatedProjectsDto): Promise<Project[]>;
    // checkers
    projectExists(id: Project["id"]): Promise<boolean>;
    projectBelongsToOwner(projectId: Project["id"], ownerId: User["id"]): Promise<boolean>;
    ownerProjectsCount(ownerId: User["id"]): Promise<number>;
}
