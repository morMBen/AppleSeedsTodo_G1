import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './App.css';
import { WelcomePage } from './Welcomepage';
import { addTask } from './Actions/taskAction';
import { State } from './redux/combine';

function App() {
  const dispatch = useDispatch();
  const state = useSelector((state: State) => state);
  console.log('state from app ts', state);
  return (
    <div className='App'>
      <WelcomePage />
    </div>
  );
}

export default App;
