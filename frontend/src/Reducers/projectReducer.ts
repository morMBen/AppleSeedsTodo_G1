import {I_Project, first_initial_state, I_Action_Project } from "../Types/taskType";
import {Constants} from "../redux/constants"

// const intial_State : first_initial_state  =
const intial_State : I_Project[] = 
  // tasks: [ {taskName: "hila",
  []



export const projectReducer = (state = intial_State, action : I_Action_Project) => {
    // const tasks = state.tasks
    console.log("from red", action.payload);
    switch (action.type) {
        case Constants.fetchProjects:
        return [...state, ];
        default: {
          return state;
        }
      }
};