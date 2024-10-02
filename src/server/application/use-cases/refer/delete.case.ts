import ReferService from "../../../domain/services/refer.service";
import Refer from "../../../domain/entities/refer.entity";
import { DeleteReferDto, DeleteReferSchema } from "../../dto/refer/delete.dto";

export class DeleteReferUseCase {
    constructor(private referService: ReferService) { }

    async execute({ id, projectId }: DeleteReferDto): Promise<Refer> {

        const validationResult = DeleteReferSchema.safeParse({ id, projectId });

        if (!validationResult.success) {
            throw new Error(JSON.stringify(validationResult.error));
        }

        return await this.referService.delete(validationResult.data);
    }
}

