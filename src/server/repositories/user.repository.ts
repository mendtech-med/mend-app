import User from "../domain/entities/user.entity";
import { CreateUserDto, FindUserDto, UpdateUserDto, DeleteUserDto } from "../domain/repositories/user.dto";
import { IUserRepository } from "../domain/repositories/user.interface";
import prisma from "../infrastructure/database/prisma.infra";

class UserRepository implements IUserRepository {
    async create(user: CreateUserDto): Promise<User> {
        const createdUser = await prisma.user.create({
            data: {
                clerkId: user.clerkId,
                emails: user.emails,
                phoneNumbers: user.phoneNumbers,
                firstName: user.firstName,
                lastName: user.lastName
            },
        });

        if (!createdUser) {
            throw new Error("User not created");
        }

        return {
            id: createdUser.id,
            clerkId: createdUser.clerkId,
            emails: createdUser.emails,
            phoneNumbers: createdUser.phoneNumbers,
            firstName: createdUser.firstName,
            lastName: createdUser.lastName,
            createdAt: createdUser.createdAt,
            updatedAt: createdUser.updatedAt
        } as User;
    }

    async update(user: UpdateUserDto): Promise<User> {
        const foundUser = await prisma.user.findUnique({
            where: {
                id: user.id
            }
        });

        if (!foundUser) {
            throw new Error("User not found");
        }

        const updatedUser = await prisma.user.update({
            where: {
                id: user.id
            },
            data: {
                clerkId: user.clerkId,
                emails: user.emails,
                phoneNumbers: user.phoneNumbers,
                firstName: user.firstName,
                lastName: user.lastName
            }
        });

        return {
            id: updatedUser.id,
            clerkId: updatedUser.clerkId,
            emails: updatedUser.emails,
            phoneNumbers: updatedUser.phoneNumbers,
            firstName: updatedUser.firstName,
            lastName: updatedUser.lastName,
            createdAt: updatedUser.createdAt,
            updatedAt: updatedUser.updatedAt
        } as User;
    }

    async find({ id }: FindUserDto): Promise<User[]> {
        const users = await prisma.user.findMany({
            where: {
                id
            }
        });

        return users.map(user => {
            return {
                id: user.id,
                clerkId: user.clerkId,
                emails: user.emails,
                phoneNumbers: user.phoneNumbers,
                firstName: user.firstName,
                lastName: user.lastName,
                createdAt: user.createdAt,
                updatedAt: user.updatedAt
            } as User;
        });
    }

    async delete({ id }: DeleteUserDto): Promise<User> {
        const deletedUser = await prisma.user.delete({
            where: {
                id
            }
        });

        return {
            id: deletedUser.id,
            clerkId: deletedUser.clerkId,
            emails: deletedUser.emails,
            phoneNumbers: deletedUser.phoneNumbers,
            firstName: deletedUser.firstName,
            lastName: deletedUser.lastName,
            createdAt: deletedUser.createdAt,
            updatedAt: deletedUser.updatedAt
        } as User;
    }

}


export default UserRepository;