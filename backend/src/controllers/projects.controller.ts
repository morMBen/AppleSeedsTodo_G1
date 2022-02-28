import { Request, Response } from 'express';
import mockProject from '../data';

export async function getAllProjectsNamesHandler(req: Request, res: Response) {

  return res.send(mockProject.title);
}
