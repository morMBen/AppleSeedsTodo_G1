import  {combineReducers} from "redux";
import {tasksReducer} from './taskReducer';

const reducers = combineReducers({ taskReducer: tasksReducer,
});
export default reducers