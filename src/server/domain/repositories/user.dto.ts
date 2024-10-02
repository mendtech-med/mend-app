import User from "../entities/user.entity";


interface UpdateUserDto {
    id: string;
    clerkId?: string;
    emails?: string[];
    phoneNumbers?: string[];
    firstName?: string;
    lastName?: string;
};

type CreateUserDto = Omit<User, "id" | "createdAt" | "updatedAt">;

type FindUserDto = {
    id?: string;
};

type DeleteUserDto = {
    id: string;
};

export type { CreateUserDto, UpdateUserDto, FindUserDto, DeleteUserDto };