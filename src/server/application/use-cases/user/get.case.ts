import UserService from "../../../domain/services/user.service";
import User from "../../../domain/entities/user.entity";
import { GetUserDto } from "../../dto/user/get.dto";

export class GetUserUseCase {
    constructor(private userService: UserService) { }

    async execute({ id }: GetUserDto): Promise<User[]> {
        return await this.userService.get({ id });
    }
}

