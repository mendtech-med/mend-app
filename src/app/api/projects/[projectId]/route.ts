import { ProjectController } from "@/server/application/controllers/project.controller";
import { CreateProjectUseCase } from "@/server/application/use-cases/project/create.case";
import { DeleteProjectUseCase } from "@/server/application/use-cases/project/delete.case";
import { GetProjectUseCase } from "@/server/application/use-cases/project/get.case";
import { LastUpdatedProjectsUseCase } from "@/server/application/use-cases/project/last-updated.case";
import { UpdateUpdateUseCase } from "@/server/application/use-cases/project/update.case";
import ProjectService from "@/server/domain/services/project.service";
import ProjectRepository from "@/server/repositories/project.repository";


// Initialize necessary classes
const agentRepository = new ProjectRepository();
const agentService = new ProjectService(agentRepository);


// Initialize Use Cases
const getAgentUseCase = new GetProjectUseCase(agentService);
const createAgentUseCase = new CreateProjectUseCase(agentService);
const updateAgentUseCase = new UpdateUpdateUseCase(agentService);
const deleteAgentUseCase = new DeleteProjectUseCase(agentService);
const lastUpdatedProjectsUseCase = new LastUpdatedProjectsUseCase(agentService);


// Initialize Controllers
const projectController = new ProjectController(getAgentUseCase, createAgentUseCase, updateAgentUseCase, deleteAgentUseCase, lastUpdatedProjectsUseCase);


export async function GET(req: Request, { params }: { params: { projectId: string } }) {
    console.log('GET /api/projects');
    return projectController.getProjects(req, { params });
}