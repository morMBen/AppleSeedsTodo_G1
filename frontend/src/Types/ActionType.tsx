export interface markCompleteAction {
	type: "MARK_COMPLETE";
	todo: string;
}

export interface markIncompleteAction {
	type: "MARK_INCOMPLETE";
	todo: string;
}

export interface deleteTodoAction {
	type: "DELETE_TODO";
	todo: string;
}

// export interface addTodoAction {
// 	type: "ADD_TODO";
// 	todo: string;
// }