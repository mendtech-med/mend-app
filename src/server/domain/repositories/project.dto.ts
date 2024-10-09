import Project from "../entities/project.entity";

interface UpdateProjectDto {
    id: string;
    title?: string;
    content?: string;
};

type CreateProjectDto = Omit<Project, "id" | "createdAt" | "updatedAt">;

type FindProjectDto = {
    id?: string;
    userId: string;
};

type DeleteProjectDto = {
    id: string;
};


type LastUpdatedProjectsDto = {
    userId: string;
    limit: number;
};

export type { CreateProjectDto, UpdateProjectDto, FindProjectDto, DeleteProjectDto , LastUpdatedProjectsDto };