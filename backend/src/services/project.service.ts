import mockProjects from '../mock-data';
import { Project } from '../mock-data';

// interface ProjectsDetails{
//   _id: obj._id,
//       title: obj.title,
//       description: obj.description,
//       goal: obj.goal,
//       createdAt: obj.createdAt,
//       updatedAt: obj.updatedAt,
// }

export async function createProjectService(newProject: any) {
  newProject._id = "789c";
  newProject.createdAt = new Date;
  newProject.updatedAt = new Date;
  mockProjects.push(newProject);

  return newProject;
}

export async function getAllProjectsDetailsService() { //: Promise<Project[]> {
  return mockProjects.map((obj) => {  // Cut out task from projects  
    return {
      _id: obj._id,
      title: obj.title,
      description: obj.description,
      goal: obj.goal,
      createdAt: obj.createdAt,
      updatedAt: obj.updatedAt,
    }
  })
}

export async function getProjectByIdService(
  projectId: string
): Promise<Project | undefined> {
  return mockProjects.find((project) => project._id === projectId);
}
