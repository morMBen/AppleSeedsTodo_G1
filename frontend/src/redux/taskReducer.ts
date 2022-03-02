import { Action } from './actions';
import { store } from './store';

export interface TasksState {
  tasks: string[];

}
const intialState = { tasks :["hila"] };

const initialProjectState = { isActive : false};


export const tasksReducer = (state: TasksState = intialState, action: Action) => {
  switch (action.type) {
    case 'ADD_TASK': {
      return { ...state, tasks: [...state.tasks, action.payload] };
    }
    // case 'REMOVE_TASK': {
    //   return { ...state, tasks: [...state.tasks, action.payload] };
    // }
    default: {
      return state;
    }
  }
};

// export const projectReducer = (state: projectReducer = initialProjectState, action: Action) => {
//   switch (action.type) {
//     case 'False': {
//       return { ...state, tasks: [...state., action.payload] };
//     }
//     default: {
//       return state;
//     }
//   }
// };




