import Project from "../entities/project.entity";
import Refer from "../entities/refer.entity";
import { CreateReferDto, DeleteReferDto, FindReferDto, UpdateReferDto } from "./refer.dto";

export interface IReferRepository {
    // crud
    find({projectId}: FindReferDto): Promise<Refer[]>;
    create(refer: CreateReferDto): Promise<Refer>;
    update(refer: UpdateReferDto): Promise<Refer>;
    delete({ id }: DeleteReferDto): Promise<Refer>;
    // status
    // checkers
    referExists(id: Refer["id"]): Promise<boolean>;
    referBelongsToProject(referId: Refer["id"], projectId: Project["id"]): Promise<boolean>;
    projectRefersCount(projectId: Project["id"]): Promise<number>;
}
