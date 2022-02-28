export type Action = { type: 'ADD_TASK'; payload: string };

export const addTask = (note: string): Action => ({
  type: 'ADD_TASK',
  payload: note,
});
