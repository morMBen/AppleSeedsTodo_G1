import  {combineReducers} from "redux";
import {taskReducer} from '../Reducers/taskRducer';
import {projectReducer} from '../Reducers/projectReducer';


const reducers = combineReducers({ tasks: taskReducer, project: projectReducer
});
export default reducers
export type State = ReturnType<typeof reducers>;