import React from 'react';
import './App.css';

import { useDispatch, useSelector } from 'react-redux';
import { addTask } from './redux/actions';
import { tasksReducer } from './redux/taskReducer';
import Navbar from './components/navbar/Navbar';

function App() {
  return <div className='App'>
    <Navbar></Navbar>
  </div>;
}

export default App;
