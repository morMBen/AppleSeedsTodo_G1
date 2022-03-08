export type I_Task = {
    taskName: string,
    taskDescription: string,
    updatedAt: Date,
    createdAt: Date,   
}
export interface first_initial_state {
    // tasks: I_Task[]
}
type Types =  "ADD_TASK" | "REMOVE_TASK" |  "SET_TASK";

export interface I_Action{
    type: Types,
    payload: I_Task | undefined;
}

