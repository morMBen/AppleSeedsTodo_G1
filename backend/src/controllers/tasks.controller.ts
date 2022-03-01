import { Request, Response } from 'express';
import { UpdateTaskInput } from '../schema/task.schema';
import { getProjectByIdService } from '../services/project.service'
import { getTasksByProjectService } from '../services/task.service';

export async function getTasksByProjectHandler(
  req: Request<UpdateTaskInput['params']>,
  res: Response
) {
  const { projectId } = req.params;
  const project = await getProjectByIdService(projectId);
  if (!project) {
    return res.sendStatus(404);
  }

  const tasks = await getTasksByProjectService(project);

  return res.send(tasks);
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
