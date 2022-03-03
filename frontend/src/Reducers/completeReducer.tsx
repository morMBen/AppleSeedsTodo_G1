import { Reducer } from "redux";
import {
	deleteTodoAction,
	markCompleteAction,
	markIncompleteAction,
} from "../Types/ActionType";
import { complete } from "../Types/StoreType";

const initialState: complete = [];
// usestate = reducer =[prevestate ,action] 

const completeReducer: Reducer< complete,
	deleteTodoAction | markCompleteAction | markIncompleteAction> = (state = initialState, action) => {
	switch (action.type) {
		case "MARK_COMPLETE":
			return [...state, action.todo];
		case "MARK_INCOMPLETE":
		case "DELETE_TODO":
			return [...state.filter((todo) => todo !== action.todo)];
		default:
			return [...state];
	}
};

export default completeReducer;