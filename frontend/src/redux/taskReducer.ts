import { Action } from './actions';
import { store } from './store';

export interface TasksState {
  tasks: string[];
}
const intialState = { tasks: [] };

export interface projectReducer {
  id: string;
}


export const tasksReducer = (state: TasksState = intialState, action: Action) => {
  switch (action.type) {
    case 'ADD_TASK': {
      return { ...state, tasks: [...state.tasks, action.payload] };
    }
    case 'REMOVE_TASK': {
      return { ...state, tasks: [...state.tasks, action.payload] };
    }
    default: {
      return state;
    }
  }
};

export const projectReducer = (state: TasksState = intialState, action: Action) => {
  switch (action.type) {
    case 'ADD_TASK': {
      return { ...state, tasks: [...state.tasks, action.payload] };
    }
    case 'REMOVE_TASK': {
      return { ...state, tasks: [...state.tasks, action.payload] };
    }
    default: {
      return state;
    }
  }
};




