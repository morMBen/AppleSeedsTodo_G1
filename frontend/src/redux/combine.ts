import  {combineReducers} from "redux";
import tasksReducer from './taskReducer';

const reducers = combineReducers({
    task: tasksReducer
});
export default reducers