import mockProjects from '../mock-data';

export async function getTasksByProjectService(projectId: string) {
  const tasks = mockProjects.find((project) => project._id === projectId);
  return tasks
}
