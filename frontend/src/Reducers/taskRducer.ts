import { I_Action, first_initial_state } from "../Types/taskType";
import {Constants} from "../redux/constants"

const intial_State : first_initial_state  = {
  tasks: [],
};

export const taskReducer = (state = intial_State, action : I_Action) => {
    const newTasks = [...state.tasks ]
    switch (action.type) {
        case Constants.addTodo:
         const newTaskToAdd = action.payload;
        if (newTaskToAdd) newTasks.push(newTaskToAdd)
        return {...state, Tasks:newTasks}
        default: {
          return state;
        }
      }
};