import  {combineReducers} from "redux";
// import {tasksReducer} from '../Reducers/taskRducer'
import {taskReducer} from '../Reducers/taskRducer';

const reducers = combineReducers({ tasks: taskReducer
});
export default reducers
export type State = ReturnType<typeof reducers>;