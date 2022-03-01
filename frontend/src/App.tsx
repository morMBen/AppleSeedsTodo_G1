import React from 'react';
import './App.css';
import Welcomepage from './Welcomepage';
import { useDispatch, useSelector } from 'react-redux';
// import { addTask } from './redux/actions';
import { tasksReducer } from './redux/taskReducer';

function App() {
  return (
    <div className='App'>
      <Welcomepage />
    </div>
  );
}

export default App;
