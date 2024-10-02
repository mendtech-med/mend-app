import ReferService from "../../../domain/services/refer.service";
import Refer from "../../../domain/entities/refer.entity";
import { CreateReferDto, CreateReferSchema } from "../../dto/refer/create.dto";

export class CreateReferUseCase {
    constructor(private referService: ReferService) { }

    async execute(refer: CreateReferDto): Promise<Refer> {

        const validationResult = CreateReferSchema.safeParse(refer);

        if (!validationResult.success) {
            throw new Error(JSON.stringify(validationResult.error));
        }

        return await this.referService.create(validationResult.data);
    }
}

