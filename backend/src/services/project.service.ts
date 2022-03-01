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

export async function getAllProjectsDetailsService() {   
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
  projectId: string): Promise<Project | undefined> {
  return mockProjects.find((project) => project._id === projectId);
}
