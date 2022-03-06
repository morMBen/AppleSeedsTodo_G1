import { Constants } from "../redux/constants";
import {I_Task} from "../Types/taskType";

export const addTodo = ( payload : I_Task)  => {
    return{
        type: Constants.addTodo,
        palyload: payload   
    }
}
export const removeTodo = ( payload : I_Task)  => {
    return{
        type: Constants.removeTodo,
        palyload: payload   
    }
}
export const setTodo = ( payload : I_Task)  => {
    return{
        type: Constants.setTodo,
        palyload: payload   
    }
}