import UserService from "../../../domain/services/user.service";
import User from "../../../domain/entities/user.entity";
import { DeleteUserDto, DeleteUserSchema } from "../../dto/user/delete.dto";

export class DeleteUserUseCase {
    constructor(private userService: UserService) { }

    async execute({ id }: DeleteUserDto): Promise<User> {

        const validationResult = DeleteUserSchema.safeParse({ id });

        if (!validationResult.success) {
            throw new Error(JSON.stringify(validationResult.error));
        }

        return await this.userService.delete(validationResult.data);
    }
}

