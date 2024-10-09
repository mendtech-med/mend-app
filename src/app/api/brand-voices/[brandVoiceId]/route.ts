import { BrandVoiceController } from "@/server/application/controllers/brand-voice.controller";
import { CreateBrandVoiceUseCase } from "@/server/application/use-cases/brand-voice/create.case";
import { DeleteBrandVoiceUseCase } from "@/server/application/use-cases/brand-voice/delete.case";
import { GetBrandVoiceUseCase } from "@/server/application/use-cases/brand-voice/get.case";
import BrandVoiceService from "@/server/domain/services/brand-voice.service";
import BrandVoiceRepository from "@/server/repositories/brand-voice.repository";


// Initialize necessary classes
const agentRepository = new BrandVoiceRepository();
const agentService = new BrandVoiceService(agentRepository);


// Initialize Use Cases
const getAgentUseCase = new GetBrandVoiceUseCase(agentService);
const createAgentUseCase = new CreateBrandVoiceUseCase(agentService);
const deleteAgentUseCase = new DeleteBrandVoiceUseCase(agentService);


// Initialize Controllers
const brandVoiceController = new BrandVoiceController(getAgentUseCase, createAgentUseCase, deleteAgentUseCase);


export async function GET(req: Request, { params }: { params: { brandVoiceId: string | undefined } }) {
    return brandVoiceController.getBrandVoices(req, { params });
}
