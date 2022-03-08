import { Constants } from "../redux/constants";
import {I_Task} from "../Types/taskType";

export const addTask = ( payload : I_Task)  => {
    return{
        type: Constants.addTask,
        palyload: payload   
    };
}
export const getTask = ( payload : undefined)  => {
    return{
        type: Constants.getTask,
        payload: payload  
    };
}
export const removeTask = ( payload : I_Task)  => {
    return{
        type: Constants.removeTask,
        payload: payload   
    };
}
export const setTask = ( payload : I_Task)  => {
    return{
        type: Constants.setTask,
        payload: payload   
    };
}