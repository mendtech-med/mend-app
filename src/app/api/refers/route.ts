import { ReferController } from "@/server/application/controllers/refer.controller";
import { GetReferUseCase } from "@/server/application/use-cases/refer/get.case";
import { CreateReferUseCase } from "@/server/application/use-cases/refer/create.case";
import { DeleteReferUseCase } from "@/server/application/use-cases/refer/delete.case";
import ReferService from "@/server/domain/services/refer.service";
import ReferRepository from "@/server/repositories/refer.repository";

// Initialize necessary classes
const referRepository = new ReferRepository();
const referService = new ReferService(referRepository);


// Initialize Use Cases
const getReferUseCase = new GetReferUseCase(referService);
const createReferUseCase = new CreateReferUseCase(referService);
const deleteReferUseCase = new DeleteReferUseCase(referService);

// Initialize Controllers
const referController = new ReferController(getReferUseCase, createReferUseCase, deleteReferUseCase);

export async function GET(req: Request, { params }: { params?: { projectId?: string } }) {
    params = params ?? {};
    return referController.getRefers(req, { params });
}