import React from 'react';
import './App.css';
import Welcomepage from './Welcomepage';
import Navbar from './components/navbar/Navbar';
import Dropdown from './components/dropdown/Dropdown';


function App() {
  return (
    <div className='App'>
      <Navbar></Navbar>
      {/* <Welcomepage tasks={[]} addTask={()=>{}}/> */}
      <Dropdown/>
    </div>
  );
}

export default App;
