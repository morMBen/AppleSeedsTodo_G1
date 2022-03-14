import { Request, Response } from 'express';
import { CreateTaskInput, UpdateTaskInput } from '../schema/task.schema';
import { getProjectByIdService } from '../services/project.service'
import { createNewTaskService } from '../services/task.service';

export async function createNewTaskHandler(req: Request, res: Response) {
  const { projectId } = req.params;
  if (!projectId) {
    return res.status(400).send("projectId is required as params");
  }

  const { newTask } = req.body;
  try {
    const resObj = await createNewTaskService(projectId, newTask);
    return res.status(200).send(resObj);
  } catch (error: any) {
    return res.status(500).send(error.message)
  }
}

export async function getTasksByProjectHandler(
  req: Request<UpdateTaskInput['params']>,
  res: Response
) {
  const { projectId } = req.params;
  const project = await getProjectByIdService({ projectId });
  if (!project) {
    res.status(404).send("Project not found");
    return;
  }

  return res.send(project.tasks);
}


// export async function updateTaskProgressHandler(
//   // req: Request, res: Response
//   req: Request<UpdateProjectInput['params']>,
//   res: Response,
// ) {
//   const { projectId } = req.params;
//   const project = await findProjectService({ projectId });
//   if (!project) {
//     return res.sendStatus(404);
//   }
//   const { progress } = req.body;
//   const updatedTask = await updateTaskProgressService()
// }

// ) {


// return res.send(project);
// }
