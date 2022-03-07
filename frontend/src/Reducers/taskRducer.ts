import { I_Action, first_initial_state } from "../Types/taskType";
import {Constants} from "../redux/constants"

const intial_State : first_initial_state  = {
  tasks: [],
};

export const taskReducer = (state = intial_State, action : I_Action) => {
    const tasks = [...state.tasks ]
    switch (action.type) {
        case Constants.addTodo:
         const newTaskToAdd = action.payload;
        if (newTaskToAdd) tasks.push(newTaskToAdd)
        return {...state, Tasks:tasks};
        case Constants.setTodo:
        const newTaskToset = action.payload;
        const newTasks = tasks.map((task) => {
          if(newTaskToAdd?.taskName === task.taskName)
          return newTaskToset;
          else{
            return task;
          }
        });
        return {...state , task:newTasks}
        default: {
          return state;
        }
      }
};