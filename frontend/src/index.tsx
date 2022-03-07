import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Provider } from 'react-redux';
import { BrowesRouter } from 'react-router-dom';
// import { store } from './redux/store';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { applyMiddleware } from 'redux';
import { taskReducer } from './Reducers/taskRducer';

const logger = createLogger();
const store = createStore(combineReducers({ Task: taskReducer }), applyMiddleware(logger));

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
