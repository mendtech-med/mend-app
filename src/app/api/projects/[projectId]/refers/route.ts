import { ReferController } from "@/server/application/controllers/refer.controller";
import { CreateReferUseCase } from "@/server/application/use-cases/refer/create.case";
import { DeleteReferUseCase } from "@/server/application/use-cases/refer/delete.case";
import { GetReferUseCase } from "@/server/application/use-cases/refer/get.case";
import ReferService from "@/server/domain/services/refer.service";
import ReferRepository from "@/server/repositories/refer.repository";


// Initialize necessary classes
const referRepository = new ReferRepository();
const referService = new ReferService(referRepository);


// Initialize Use Cases
const getAgentUseCase = new GetReferUseCase(referService);
const createAgentUseCase = new CreateReferUseCase(referService);
const deleteAgentUseCase = new DeleteReferUseCase(referService);


// Initialize Controllers
const referController = new ReferController(getAgentUseCase, createAgentUseCase, deleteAgentUseCase);


export async function GET(req: Request, { params }: { params: { projectId: string } }) {
    return referController.getRefers(req, { params });
}

export async function POST(req: Request, res: Response) {
    return referController.createRefer(req, res);
}

// export async function PUT(req: Request, res: Response) {
//     return referController.upd
// }

export async function DELETE(req: Request, res: Response) {
    return referController.deleteRefer(req, res);
}