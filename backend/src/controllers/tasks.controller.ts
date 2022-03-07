import { Request, Response } from 'express';
import { CreateTaskInput, UpdateTaskInput } from '../schema/task.schema';
import { getProjectByIdService } from '../services/project.service'
import { deleteTaskService } from '../services/task.service';

export async function createNewTaskHandler(
  req: Request<CreateTaskInput['params']>,
  res: Response
) {
  const { projectId } = req.params;
  const newTask = req.body;
  const project = await getProjectByIdService(projectId);
  if (!project) {
    return res.status(200).send({ ok: true, data: null, message: "Project not found" });
  }
  newTask._id = "abc4";
  newTask.createdAt = new Date;
  newTask.updatedAt = new Date;
  project.tasks?.push(newTask);
  return res.send({ ok: true, data: newTask, message: "Success" });
}

export async function getTasksByProjectHandler(
  req: Request<UpdateTaskInput['params']>,
  res: Response
) {
  const { projectId } = req.params;
  const project = await getProjectByIdService(projectId);
  if (!project) {
    return res.status(200).send({ ok: true, data: null, message: "Project not found" });
  }

  return res.send({ ok: true, data: project.tasks, message: "Success" });
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

export async function deleteTaskHandler(req: Request, res: Response) {
  const { projectId } = req.params;
  if (!projectId) {
    return res.status(400).send("projectId required as params");
  };

  const project = await getProjectByIdService(projectId);
  if (!project) {
    return res.status(200).send({ ok: true, data: null, message: "Project not found" });
  };

  const { taskId } = req.query;
  if (!taskId) {
    return res.status(400).send("projectId required as query");
  };
  
  const updatedTasks = await deleteTaskService(project.tasks, taskId);
  if (!updatedTasks) {
    return res.status(200).send({ ok: false, data: null, message: "Task not found" });
  }

  // project = {...project, tasks: updatedTasks}
  
  return res.status(200).send({ ok: true, data: {projectId, taskId}, message: "Success" });
}
