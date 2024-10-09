import Project from "../domain/entities/project.entity";
import { CreateProjectDto, FindProjectDto, UpdateProjectDto, DeleteProjectDto, LastUpdatedProjectsDto } from "../domain/repositories/project.dto";
import { IProjectRepository } from "../domain/repositories/project.interface";
import prisma from "../infrastructure/database/prisma.infra";

class ProjectRepository implements IProjectRepository {
    async create(project: CreateProjectDto): Promise<Project> {
        const createdProject = await prisma.project.create({
            data: {
                title: project.title,
                content: project.content,
                owner: {
                    connect: {
                        clerkId: project.ownerId
                    }
                },
                audience: {
                    create: {
                        level: project.audience.level,
                        target: project.audience.target,
                        brandVoice: {
                            connect: {
                                id: project.audience.brandVoiceId
                            }
                        }
                    }
                }
            },
            include: {
                audience: true
            }
        });
        return {
            id: createdProject.id,
            title: createdProject.title,
            content: createdProject.content,
            audience: createdProject.audience,
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
                title: project.title,
                content: project.content,
            },
        });

        return {
            id: updatedProject.id,
            title: updatedProject.title,
            content: updatedProject.content,
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
            },
            include: {
                audience: true,
                refers: true,
            }
        });

        return foundProjects.map(project => ({
            id: project.id,
            title: project.title,
            content: project.content,
            audience: project.audience,
            refers: project.refers,
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
            title: deletedProject.title,
            content: deletedProject.content,
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
            title: project.title,
            content: project.content,
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
            },
            include: {
                owner: true
            }
        });

        if (!project) {
            return false;
        }

        return project.owner.clerkId === ownerId;
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