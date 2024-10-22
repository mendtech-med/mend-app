import { CreateReferDto } from "../../application/dto/refer/create.dto";
import { GetReferDto } from "../../application/dto/refer/get.dto";
import { UpdateReferDto } from "../../application/dto/refer/update.dto";
import { DeleteReferDto } from "../../application/dto/refer/delete.dto";
import Refer from "../entities/refer.entity";
import { IReferRepository } from "../repositories/refer.interface";

class ReferService {
    constructor(private referRepository: IReferRepository) { }

    async create(refer: CreateReferDto): Promise<Refer> {
        return await this.referRepository.create({
            content: refer.content,
            project: refer.project,
            sourceUrl: refer.sourceUrl
        });
    }


    async update(refer: UpdateReferDto): Promise<Refer> {

        // check if refer exists
        const referExists = await this.referRepository.referExists(refer.id);
        if (!referExists) {
            throw new Error("Refer does not exist");
        }

        // check if refer belongs to owner
        const referBelongsToOwner = await this.referRepository.referBelongsToProject(refer.id, refer.projectId);

        if (!referBelongsToOwner) {
            throw new Error("Refer does not belong to owner");
        }

        return await this.referRepository.update({
            id: refer.id,
            content: refer.content,
            projectId: refer.projectId,
            sourceUrl: refer.sourceUrl
        });
    }

    async get({ projectId }: GetReferDto): Promise<Refer[]> {
        return await this.referRepository.find({ projectId });
    }

    async delete({ id, projectId }: DeleteReferDto): Promise<Refer> {
        // check if refer exists
        const referExists = await this.referRepository.referExists(id);
        if (!referExists) {
            throw new Error("Refer does not exist");
        }

        // check if refer has resources
        const belongsToOwner = await this.referRepository.referBelongsToProject(id, projectId);
        if (!belongsToOwner) {
            throw new Error("Refer does not belong to owner");
        }
        return await this.referRepository.delete({ id });
    }


}

export default ReferService;