import { Request, Response } from 'express';
import { getAllProjectsDetailsService } from '../services/project.service';

export async function getAllProjectsDetailsHandler(req: Request, res: Response) {
  const projects = await getAllProjectsDetailsService()

  return res.send(projects);
}

export async function createNewProjectHandler() {
  
}
