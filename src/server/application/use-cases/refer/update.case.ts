import ReferService from "../../../domain/services/refer.service";
import Refer from "../../../domain/entities/refer.entity";
import { UpdateReferDto , UpdateReferSchema } from "../../dto/refer/update.dto";

export class UpdateUpdateUseCase {
    constructor(private referService: ReferService) { }

    async execute(refer: UpdateReferDto): Promise<Refer> {

        const validationResult = UpdateReferSchema.safeParse(refer);

        if (!validationResult.success) {
            throw new Error(JSON.stringify(validationResult.error));
        }

        return await this.referService.update(validationResult.data);
    }
}

