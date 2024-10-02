// import { CreateUserUseCase } from "../use-cases/user/create.case";
// import { GetUserUseCase } from "../use-cases/user/get.case";
// import { CreateUserDto } from "../dto/user/create.dto";
// import { GetUserDto } from "../dto/user/get.dto";
// import { UpdateUserUseCase } from "../use-cases/user/update.case";
// import { UpdateUserDto } from "../dto/user/update.dto";
// import { DeleteUserUseCase } from "../use-cases/user/delete.case";
// import { DeleteUserDto } from "../dto/user/delete.dto";

// export class UserController {

//     constructor(private getUserUseCase: GetUserUseCase,
//         private createUserUseCase: CreateUserUseCase,
//         private updateUserUseCase: UpdateUserUseCase,
//         private deleteUserUseCase: DeleteUserUseCase
//     ) { }

//     async getUsers(req: Request, res: Response) {
//         const { id }: GetUserDto = req.params as unknown as GetUserDto;
//         try {
//             const users = await this.getUserUseCase.execute({ id });
//             return Response.json(users);
//         } catch (error: any) {
//             res.status(400).json({ message: error?.message ?? "An error occurred" });
//         }
//     }
// }