export type Action = { type: 'ADD_TASK' | "REMOVE_TASK", 
 payload: string };
 

export const addTask = (note: string): Action => ({
  type: 'ADD_TASK',
  payload: note,
});

export const removeTask = (note: string): Action => ({
  type: 'REMOVE_TASK',
  payload: note,
});


// const addTodoAction = {
//   type: 'todos/todoAdded',
//   payload: 'Buy milk'
// }










//An action object can have other fields with additional information about what happened. By convention, we put that information in a field called payload.
//A typical action object might look like this:

// const addTodoAction = {
//   type: 'todos/todoAdded',
//   payload: 'Buy milk'
// }

//An action creator is a function that creates and returns an action object.
// We typically use these so we don't have to write the action object by hand every time.
// const addTodo = text => {
//   return {
//     type: 'todos/todoAdded',
//     payload: text
//   }
// }