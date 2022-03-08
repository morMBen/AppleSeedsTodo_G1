export type I_Task = {
    _id: string;
    taskName: string,
    taskDescription: string,
    updatedAt: Date,
    createdAt: Date,   
}
export interface I_Project {
    project_id: string;
    name:string
    description: string;
    goal: string;
    tasks: Array<I_Task>;
  }

export interface first_initial_state {
    tasks: I_Task[]
}
export type Types =  "ADD_TASK" | "REMOVE_TASK" |  "SET_TASK" | "GET_TASKS";
export type TypesProject = "ADD_ONE_PROJECT" | "REMOVE_PROJECT" | "SET_ONE_PROJECT" | "SET_PROJECT" |"FETCH_PROJECTS" | "FETCH_ONE_PROJECTS"

export interface I_Action_Task{
    type: Types,
    payload: I_Task | undefined;
}
export interface I_Action_Project{
    type:TypesProject ,
    payload: I_Project | undefined;
}

