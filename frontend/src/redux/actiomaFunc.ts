import { Dispatch } from "redux";

export const addTask = (note: string) => {
    return (dispatch : Dispatch) => {
        dispatch({
        type: 'ADD_TASK',
        payload: note,
    })
}
};

export const removeTask = (note: string) => {
    return (dispatch : Dispatch) => {
        dispatch({
        type: 'REMOVE_TASK',
        payload: note,
    })
}
};

