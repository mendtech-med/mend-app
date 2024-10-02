import User from "../entities/user.entity";
import { CreateUserDto, FindUserDto, UpdateUserDto, DeleteUserDto } from "./user.dto";

export interface IUserRepository {
    create(user: CreateUserDto): Promise<User>;
    update(user: UpdateUserDto): Promise<User>;
    find({ id }: FindUserDto): Promise<User[]>;
    delete({ id }: DeleteUserDto): Promise<User>;
}
