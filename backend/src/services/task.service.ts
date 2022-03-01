import mockProjects from '../mock-data';

export async function getTasksByProjectService(project: object) {
  const tasks = mockProjects.find((project) => project._id === project._id);
  return tasks
}
