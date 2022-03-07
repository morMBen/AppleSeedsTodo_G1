import React from 'react';
import './App.css';
import Welcomepage from './Welcomepage';
import Navbar from './components/navbar/Navbar';


function App() {
  return (
    <div className='App'>
      <Navbar></Navbar>
      {/* <Welcomepage tasks={[]} addTask={()=>{}}/> */}
    </div>
  );
}

export default App;
