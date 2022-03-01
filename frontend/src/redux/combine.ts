import  {combineReducers} from "redux";
import {tasksReducer} from './taskReducer';

const reducers = combineReducers({
    task: tasksReducer,
    // project: projectreducer
});
export default reducers