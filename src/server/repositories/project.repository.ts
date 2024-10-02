import Project from "../domain/entities/project.entity";
import { CreateProjectDto, FindProjectDto, UpdateProjectDto, DeleteProjectDto, LastUpdatedProjectsDto } from "../domain/repositories/project.dto";
import { IProjectRepository } from "../domain/repositories/project.interface";
import prisma from "../infrastructure/database/prisma.infra";

class ProjectRepository implements IProjectRepository {
    async create(project: CreateProjectDto): Promise<Project> {
        const createdProject = await prisma.project.create({
            data: {
                name: project.name,
                owner: {
                    connect: {
                        clerkId: project.ownerId
                    }
                }
            }
        });
        return {
            id: createdProject.id,
            name: createdProject.name,
            ownerId: createdProject.ownerId,
            createdAt: createdProject.createdAt,
            updatedAt: createdProject.updatedAt
        } as Project;
    }

    async update(project: UpdateProjectDto): Promise<Project> {

        const foundProject = await prisma.project.findUnique({
            where: {
                id: project.id
            }
        });

        if (!foundProject) {
            throw new Error("Project not found");
        }

        const updatedProject = await prisma.project.update({
            where: {
                id: project.id
            },
            data: {
                name: project.name,
            },
        });

        return {
            id: updatedProject.id,
            name: updatedProject.name,
            createdAt: updatedProject.createdAt,
            updatedAt: updatedProject.updatedAt
        } as Project;
    };


    async find({ id, userId }: FindProjectDto): Promise<Project[]> {
        const foundProjects = await prisma.project.findMany({
            where: {
                id,
                owner: {
                    clerkId: userId
                }
            }
        });

        return foundProjects.map(project => ({
            id: project.id,
            name: project.name,
            ownerId: project.ownerId,
            createdAt: project.createdAt,
            updatedAt: project.updatedAt
        } as Project));
    }

    async delete({ id }: DeleteProjectDto): Promise<Project> {
        const deletedProject = await prisma.project.delete({
            where: {
                id
            },
        });
        return {
            id: deletedProject.id,
            name: deletedProject.name,
            ownerId: deletedProject.ownerId,
            createdAt: deletedProject.createdAt,
            updatedAt: deletedProject.updatedAt
        } as Project;
    }

    async lastUpdatedProjects({ userId, limit }: LastUpdatedProjectsDto): Promise<Project[]> {

        return prisma.project.findMany({
            where: {
                owner: {
                    clerkId: userId
                }
            },
            orderBy: {
                updatedAt: "desc"
            },
            // TODO: take: limit
        }).then(projects => projects.map(project => ({
            id: project.id,
            name: project.name,
            ownerId: project.ownerId,
            createdAt: project.createdAt,
            updatedAt: project.updatedAt
        }) as Project));

    }

    // checkers 
    async projectExists(id: Project["id"]): Promise<boolean> {
        const project = await prisma.project.findUnique({
            where: {
                id
            }
        });
        return !!project;
    }

    async projectBelongsToOwner(projectId: Project["id"], ownerId: string): Promise<boolean> {
        const project = await prisma.project.findUnique({
            where: {
                id: projectId
            }
        });

        if (!project) {
            return false;
        }

        return project.ownerId === ownerId;
    }

    async ownerProjectsCount(ownerId: string): Promise<number> {
        return await prisma.project.count({
            where: {
                owner: {
                    clerkId: ownerId
                }
            }
        });
    }

}


export default ProjectRepository;