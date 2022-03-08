import {
  object, string, number, boolean, TypeOf, date, nullable, //deepPartial,
} from 'zod';

const payload = {
  body: object({
    _id: string().optional(),
    title: string({
      required_error: "Title is required",
    }),
    description: string({
      required_error: "Description is required",
    }),
    isActive: boolean({
      required_error: "isActive flag is required",
    }),
    label: nullable(string({
      required_error: "Label is required",
    })),
    urgency: number({
      required_error: "Urgency is required",
    }),
    createdAt: date().optional(),
    updatedAt: date().optional(),
  }),
};

// const updatePayload = payload.deepPartial();

const query = {
  query: object({
    _id: string({
      required_error: "Task Id is required",
    }),
    field: string().optional(),
  }),
}
const params = {
  params: object({
    projectId: string({
      required_error: "Project Id is required",
    }),
  }),
}; 

export const createTaskSchema = object({
  ...payload,
  ...params,
});

export const findTaskSchema = object({
  ...query,
  ...params,
});

export const updateTaskSchema = object({
  ...payload,
  ...query,
  ...params,
}); 

export type CreateTaskInput = TypeOf<typeof createTaskSchema>
export type FindTaskInput = TypeOf<typeof findTaskSchema>
export type UpdateTaskInput = TypeOf<typeof updateTaskSchema>
