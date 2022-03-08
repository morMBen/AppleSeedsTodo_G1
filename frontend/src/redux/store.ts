import { createStore } from 'redux';
import reducers from './combine';


export const store = createStore(reducers);
