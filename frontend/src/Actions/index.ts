import {
	deleteTodoActionCreator,
	markCompleteActionCreator,
	markIncompleteActionCreator,
} from "../Types/ActionCreatorsType";

export const markComplete: markCompleteActionCreator = (todo) => {
	return {
		type: "MARK_COMPLETE",
		todo,
	};
};

export const markIncomplete: markIncompleteActionCreator = (todo) => {
	return {
		type: "MARK_INCOMPLETE",
		todo,
	};
};

export const deleteTodo: deleteTodoActionCreator = (todo) => {
	return {
		type: "DELETE_TODO",
		todo,
	};
};