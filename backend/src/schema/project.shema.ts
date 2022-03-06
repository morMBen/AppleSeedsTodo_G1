import { array, object, string, TypeOf } from "zod";
import { createTaskSchema } from "./task.schema";

export const createProjectSchema = object({
  body: object({
    title: string({
      required_error: "Title is required",
    }),
    goal: string({
      required_error: "Goal is required",
    }),
    description: string({
      required_error: "Description is required",
    }),
    tasks: array(createTaskSchema),
  })
});

export const updateProjectSchema = object({
  params: object({
    pojectId: string({
      required_error: "projectId is required",
    })
  }),
  body: object({
    title: string().optional(),
    goal: string().optional(),
    description: string().optional(),
  })
});

export type CreateProjectInput = TypeOf<typeof createProjectSchema>;
