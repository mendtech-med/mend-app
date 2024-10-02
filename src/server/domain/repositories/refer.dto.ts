import Refer from "../entities/refer.entity";
interface UpdateReferDto {
    id: string;
    content: string;
    sourceUrl: string;
    projectId: string;
};

type CreateReferDto = Omit<Refer, "id" | "createdAt" | "updatedAt">;

type FindReferDto = {
    projectId: string;
};

type DeleteReferDto = {
    id: string;
};

export type { CreateReferDto, UpdateReferDto, FindReferDto, DeleteReferDto };