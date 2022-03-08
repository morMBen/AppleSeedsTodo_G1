import React, { useState } from 'react';
import { BrowserRouter as Router, Link } from 'react-router-dom';
import Dropdown from '../dropdown/Dropdown';
import './Navbar.css';

const Navbar = (props:any) => {
  const [isClicked, setIsClicked] = useState(false);

  const [selectProject, setSelectProject] = useState();

  const handleClick = () => {
    setIsClicked(!isClicked);
  };

  return (
    <>
      <ul className='navbar'>
        <Router>
          <div className='nav-left'>
            <li className='navbar-item select'>
              <Link to='/projects' onClick={handleClick}>
                SelectP
              </Link>
              {/* <i className='fa fa-play'></i> */}
              <i className={isClicked ? 'fa fa-caret-right' : 'fa fa-sort-down'}></i>
            </li>
            {isClicked && <Dropdown setIsClicked={setIsClicked}/>}
            <li className='navbar-item'>About</li>
          </div>
          <div className='nav-right'>
            <li className='navbar-item logo'>LOGO</li>
          </div>
        </Router>
      </ul>
    </>
  );
};

export default Navbar;
