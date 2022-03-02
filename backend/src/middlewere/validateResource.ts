import { Request, Response, NextFunction } from "express";
import { AnyZodObject } from "zod";

const validate = (schema: AnyZodObject) => {
  console.log("middlewere");
  try {
    return (req: Request, res: Response, next: NextFunction) => {
      
      try {
        schema.parse({
          body: req.body,
          query: req.query,
          params: req.params,
        });
        next();
      } catch (error: any) {
        res.status(400).send(error.errors);
        throw "";
      }
    };
    
  } catch (error) {
    throw error
  }
};

export default validate;
