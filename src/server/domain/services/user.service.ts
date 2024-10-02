//#######################################
// business logic
// eg: no more than 1 Chatbot for user in free trail
//#######################################


import { CreateUserDto } from "../../application/dto/user/create.dto";
import { GetUserDto } from "../../application/dto/user/get.dto";
import { UpdateUserDto } from "../../application/dto/user/update.dto";
import { DeleteUserDto } from "../../application/dto/user/delete.dto";
import User from "../entities/user.entity";
import { IUserRepository } from "../repositories/user.interface";

class UserService {
    constructor(private userRepository: IUserRepository) { }

    async create(user: CreateUserDto): Promise<User> {
        return await this.userRepository.create({
            clerkId: user.clerkId,
            emails: user.emails,
            phoneNumbers: user.phoneNumbers,
            firstName: user.firstName,
            lastName: user.lastName
        });
    }


    async update(user: UpdateUserDto): Promise<User> {
        return await this.userRepository.update({
            id: user.id,
            clerkId: user.clerkId,
            emails: user.emails,
            phoneNumbers: user.phoneNumbers,
            firstName: user.firstName,
            lastName: user.lastName
        });
    }

    async get({ id }: GetUserDto): Promise<User[]> {
        return await this.userRepository.find({ id });
    }


    async delete({ id }: DeleteUserDto): Promise<User> {
        return await this.userRepository.delete({ id });
    }


}

export default UserService;