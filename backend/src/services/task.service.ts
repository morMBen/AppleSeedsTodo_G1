import { Project, Task } from "../mock-data"
import projects from "../mock-data";
export async function createNewTask(project: object) {

}

export async function getTasksByProjectService(project: object) {

}

export function getTaskIndexByIdService(tasks: Task[], taskId: string) {

}

export function deleteTaskService(tasks: Task[], taskId: string) {
  const index = tasks.findIndex((task: Task) => task._id === taskId);
  if (index < 0) {
    return null
  };

  tasks.splice(index, 1);
  return tasks
}

