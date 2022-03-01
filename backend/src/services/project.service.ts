import mockProjects from '../mock-data';

export async function getAllProjectsDetailsService() {  
  return mockProjects.map((obj) => {    
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

export async function getProjectByIdService(projectId: string) {
  return mockProjects.find((project) => project._id === projectId);
}
