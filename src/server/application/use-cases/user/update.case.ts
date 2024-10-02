import UserService from "../../../domain/services/user.service";
import User from "../../../domain/entities/user.entity";
import { UpdateUserDto , UpdateUserSchema } from "../../../application/dto/user/update.dto";

export class UpdateUserUseCase {
    constructor(private userService: UserService) { }

    async execute(user: UpdateUserDto): Promise<User> {

        const validationResult = UpdateUserSchema.safeParse(user);

        if (!validationResult.success) {
            throw new Error(JSON.stringify(validationResult.error));
        }

        return await this.userService.update(validationResult.data);
    }
}

