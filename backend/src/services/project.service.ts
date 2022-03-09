import {
  DocumentDefinition, FilterQuery, QueryOptions, UpdateQuery,
} from 'mongoose';
import ProjectModel, { ProjectDocument } from "../models/project.model";


// interface ProjectsDetails{
//   _id: obj._id,
//       title: obj.title,
//       description: obj.description,
//       goal: obj.goal,
//       createdAt: obj.createdAt,
//       updatedAt: obj.updatedAt,
// }

export async function createProjectService(
  projectData: DocumentDefinition<ProjectDocument>,
) {
  const newProject = new ProjectModel(projectData)
  const result = await newProject.save();
  console.log("project: ", result);
  
  return { ok: true, data: result, message: "Success", };
}


export async function getAllProjectsDetailsService(
  query: FilterQuery<ProjectDocument>,
  options: QueryOptions = { lean: true },
) {
  const projectDtails = await ProjectModel.find(query, {}, options).select('-tasks');
  return {ok: true, data: projectDtails, message: "Success"};
}

// export async function getProjectByIdService(
//   projectId: string
// ): Promise<Project | undefined> {
//   return mockProjects.find((project) => project._id === projectId);
// }

// // export async function updateProjectService(update, options) {

// // }


// export async function deleteProjectService(projectId: string) {
//   console.log(projectId);
  
//   const projectIndex = mockProjects.findIndex((project) => project._id === projectId);
//   console.log("projectIndex: ", projectIndex);
  
//   if (projectIndex < 0) {
//     return { ok: false, data: null, message: "Project not found" }
//   }

//   mockProjects.splice(projectIndex, 1);
//   return { ok: true, data: { projectId }, message: "Success" }
// }
