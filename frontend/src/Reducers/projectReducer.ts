import {I_Project, first_initial_state, I_Action_Project } from "../Types/taskType";
import {Constants} from "../redux/constants"

const intial_State : I_Project[] = 
   [{
    project_id: "sivan",
    name:"sivan",
    description: "hila",
    goal: "sivan",
    tasks: [],}]
    // tasks: Array<I_Task>;}

export const projectReducer = (state = intial_State, action : I_Action_Project) => {
    switch (action.type) {
        case Constants.fetchProjects:
        return [...state, ];
        default: {
          return state;
        }
      }
};