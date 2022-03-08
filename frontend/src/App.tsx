import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './App.css';
import { State } from './redux/combine';
import './App.css';
import Welcomepage from './components/welcomePage/Welcomepage';
// import BackLog from './components/backLog/BackLog';
import Board from './Board';
import About from './About';
import { addTask } from './Actions/taskAction';
import { taskReducer } from './Reducers/taskRducer';
import { projectReducer } from './Reducers/projectReducer';

import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Navbar from './components/navbar/Navbar';
//import ProjectCardPage from './components/BackLog';
//import ProjectCard from './components/ProjectCard';

function App() {
  const dispatch = useDispatch();
  const state = useSelector((state: State) => state);
  console.log('state from app ts', state);
  return (
    <div className='App'>
      <BrowserRouter>
        <div className='router-container'>
          <Switch>
            <Route path='/' exact component={Welcomepage} />
            {/* <Route path='/BackLog' exact component={BackLog} /> */}
            <Route path='/Board' exact component={Board} />
            <Route path='/About' exact component={About} />
            {/* <Route path='/projects/:id' exact component={BackLog} /> */}
          </Switch>
        </div>
      </BrowserRouter>
      <Navbar></Navbar>
    </div>
  );
}

export default App;
