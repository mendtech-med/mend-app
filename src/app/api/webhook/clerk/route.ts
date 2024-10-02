import { ClerkWebhookController } from "@/server/application/controllers/webhook/clerk.controller";
import UserRepository from "@/server/repositories/user.repository";
import UserService from "@/server/domain/services/user.service";
import { GetUserUseCase } from "@/server/application/use-cases/user/get.case";
import { CreateUserUseCase } from "@/server/application/use-cases/user/create.case";
import { UpdateUserUseCase } from "@/server/application/use-cases/user/update.case";
import { DeleteUserUseCase } from "@/server/application/use-cases/user/delete.case";
import logger from "@/server/infrastructure/logging/logger";
import { type NextRequest } from 'next/server'

// Initialize necessary classes
const userRepository = new UserRepository();
const userService = new UserService(userRepository);


// Initialize Use Cases
const getUserUseCase = new GetUserUseCase(userService);
const createUserUseCase = new CreateUserUseCase(userService);
const updateUserUseCase = new UpdateUserUseCase(userService);
const deleteUserUseCase = new DeleteUserUseCase(userService);


const clerkWebhookController = new ClerkWebhookController(getUserUseCase, createUserUseCase, updateUserUseCase, deleteUserUseCase);

export async function POST(req: NextRequest, res: Response) {
    return clerkWebhookController.handleWebhook(req, res);
};

