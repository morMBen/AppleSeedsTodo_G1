import {I_Task, I_Action_Task, first_initial_state } from "../Types/taskType";
import {Constants} from "../redux/constants"

// const intial_State : first_initial_state  =
const intial_State : I_Task[] = 
  // tasks: [ {taskName: "hila",
   [ {
    _id: "111",
    taskName: "liran",
    taskDescription: "july",
    updatedAt: new Date(),
    createdAt: new Date(),}]


export const taskReducer = (state = intial_State, action : I_Action_Task) => {
    // const tasks = state.tasks
    console.log("from red", action.payload);
    switch (action.type) {
        case Constants.addTask:
         const newTaskToAdd = action.payload;
        // if (newTaskToAdd) tasks.push(newTaskToAdd)
        return [...state, newTaskToAdd ];
        // case Constants.setTask:
        // const newTaskToset = action.payload;
        // const newTasks = tasks.map((task) => {
        //   if(newTaskToAdd?.taskName === task.taskName)
        //   return newTaskToset;
          // else{
          //   return task;
          // }
        // });
        // return {...state , newTasks}
        default: {
          return state;
        }
      }
};