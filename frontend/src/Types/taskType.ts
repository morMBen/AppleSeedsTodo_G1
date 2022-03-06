export type I_Task = {
    taskName: string,
    taskDescription: string
}
export interface first_initial_state {
    tasks: I_Task[]
}
type Types =  "ADD_TODO" | "REMOVE_TODO" |  "SET_TODO";

export interface I_Action{
    type: Types,
    payload: I_Task | undefined;
}