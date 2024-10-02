import ReferService from "../../../domain/services/refer.service";
import Refer from "../../../domain/entities/refer.entity";
import { GetReferDto } from "../../dto/refer/get.dto";
import { GetReferSchema } from "../../dto/refer/get.dto";

export class GetReferUseCase {
    constructor(private referService: ReferService) { }



    async execute({ projectId }: GetReferDto): Promise<Refer[]> {
        const validationResult = GetReferSchema.safeParse({ projectId });

        if (!validationResult.success) {
            throw new Error(JSON.stringify(validationResult.error));
        }
        return await this.referService.get({ projectId });
    }
}

