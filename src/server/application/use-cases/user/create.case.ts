import UserService from "../../../domain/services/user.service";
import User from "../../../domain/entities/user.entity";
import { CreateUserDto, CreateUserSchema } from "../../dto/user/create.dto";

export class CreateUserUseCase {
    constructor(private agentService: UserService) { }

    async execute(agent: CreateUserDto): Promise<User> {

        const validationResult = CreateUserSchema.safeParse(agent);

        if (!validationResult.success) {
            throw new Error(JSON.stringify(validationResult.error));
        }

        return await this.agentService.create(validationResult.data);
    }
}

