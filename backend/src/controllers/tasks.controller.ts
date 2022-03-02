import { Request, Response } from 'express';
import { CreateTaskInput, UpdateTaskInput } from '../schema/task.schema';
import { getProjectByIdService } from '../services/project.service'
import {  } from '../services/task.service';

export async function createNewTaskHandler(
  req: Request<CreateTaskInput['params']>,
  res: Response
) {
  console.log(req.params);
  console.log(req.body);
  
  const { projectId } = req.params;
  const newTask = req.body;
  const project = await getProjectByIdService(projectId);
  if (!project) {
    res.status(404).send("Project not found");
    return;
  }
  newTask._id = "abc4";
  newTask.createdAt = new Date;
  newTask.updatedAt = new Date;
  project.tasks.push(newTask);
  return res.send(newTask);
}

export async function getTasksByProjectHandler(
  req: Request<UpdateTaskInput['params']>,
  res: Response
) {
  const { projectId } = req.params;
  const project = await getProjectByIdService(projectId);
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
