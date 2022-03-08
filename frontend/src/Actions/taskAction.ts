import { Constants } from "../redux/constants";
import {I_Task, I_Project} from "../Types/taskType";

export const addTask = ( payload : I_Task)  => {
    return{
        type: Constants.addTask,
        palyload: payload   
    };
}
export const getTask = ( payload : undefined)  => {
    return{
        type: Constants.getTasks,
        payload: payload  
    };
}
export const removeTask = ( payload : I_Task)  => {
    return{
        type: Constants.removeTask,
        payload: payload   
    };
}
export const setTasks = ( payload : I_Task)  => {
    return{
        type: Constants.setTask,
        payload: payload   
    };
}
export const fetchProjects = ( payload : I_Project)  => {
    return{
        type: Constants.fetchProjects,
        payload: payload   
    };
}
export const addOneProject = ( payload : I_Project)  => {
    return{
        type: Constants.addOneProject,
        payload: payload   
    };
}
export const removeProject = ( payload : I_Project)  => {
    return{
        type: Constants.removeProject,
        payload: payload   
    };
}
export const setProject = ( payload : I_Project)  => {
    return{
        type: Constants.setProject,
        payload: payload   
    };
}