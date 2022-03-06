import {
	deleteTodoAction,
	markIncompleteAction,
	markCompleteAction,
} from "./ActionType";

export type markCompleteActionCreator = (todo: string) => markCompleteAction;

//function that we bring back an action

export type markIncompleteActionCreator = (
	todo: string
) => markIncompleteAction;

export type deleteTodoActionCreator = (todo: string) => deleteTodoAction;