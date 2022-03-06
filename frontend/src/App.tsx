import React from 'react';
import './App.css';
import Welcomepage from './components/welcomePage/Welcomepage';
import BackLog from './components/backLog/BackLog';
import Board from './Board';
import About from './About';
import { useDispatch, useSelector } from 'react-redux';
import { addTask } from './redux/actions';
import { tasksReducer } from './redux/taskReducer';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Navbar from './components/navbar/Navbar';

function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <div>
          <Switch>
            <Route path='/' exact component={Welcomepage} />
            <Route path='/BackLog' exact component={BackLog} />
            <Route path='/Board' exact component={Board} />
            <Route path='/About' exact component={About} />
          </Switch>
        </div>
      </BrowserRouter>
      <Navbar></Navbar>
    </div>
  );
}

export default App;
