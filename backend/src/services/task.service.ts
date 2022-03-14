import TaskModel from "../models/task.model";
import { I_Task } from "../mock-data";
import { getProjectByIdService } from "./project.service";


export async function createNewTaskService(projectId: string, newTaskData: I_Task) {
  try {
    const project = await getProjectByIdService({ projectId });
    if (!project) {
      return { ok: false, data: null, message: "Project not found" };
    };

    const newTask = new TaskModel(newTaskData);
    newTask.projectId = project._id;
    const result = await newTask.save();
    project.tasks.push(result._id);
    await project.save();
    return { ok: true, data: null, message: "Success" };
  } catch (error) {
    throw error;
  }
}

export async function getTasksByProjectService(project: object) {

}
