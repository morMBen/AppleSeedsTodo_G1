import { act } from "react-dom/test-utils";
import { Reducer } from "redux";

import {
	deleteTodoAction,
	markCompleteAction,
	markIncompleteAction,
} from "../Types/ActionType"

import { incomplete } from "../Types/StoreType"

const initialState: incomplete = [];

const incompleteReducer: Reducer<
	incomplete,
	deleteTodoAction | markCompleteAction | markIncompleteAction
> = (state = initialState, action) => {
	switch (action.type) {
		case "MARK_INCOMPLETE":
			return [...state, action.todo];
		case "DELETE_TODO":
		case "MARK_COMPLETE":
			return [...state.filter((todo) => todo !== action.todo)];
		default:
			return [...state];
	}
};

export default incompleteReducer;