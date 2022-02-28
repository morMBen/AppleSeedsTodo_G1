import { Request, Response } from 'express';
import { getAllProjectsDetailsService } from '../services/project.service';

export async function getAllProjectsDetailsHandler(req: Request, res: Response) {  
  const projects = await getAllProjectsDetailsService()

  return res.send(projects); 
}


// req: Request<UpdateProductInput['params']>,
// res: Response,
// ) {
// const { productId } = req.params;

// const product = await findProductService({ productId });
// if (!product) {
//   return res.sendStatus(404);
// }

// return res.send(product);
// }
