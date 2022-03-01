import { array, object, string, TypeOf } from "zod";
import { createTaskSchema } from "./task.schema";

export const createUserSchema = object({
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

export type CreateUserInput = Omit<
  TypeOf<typeof createUserSchema>,
  'body.passwordConfirmation'
>;
