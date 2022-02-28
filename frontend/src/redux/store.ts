import { createStore } from 'redux';
import { tasksReducer } from './taskReducer';

export const store = createStore(tasksReducer);
