import React from 'react';
import './Navbar.css';

const Navbar = () => {
  return (
    <>
      <ul className='navbar'>
        <div className='nav-left'>
          <li className='navbar-item'>
            {/* <Link></Link> */}
            SelectP
            <i className='fa fa-play'></i>
          </li>
          <li className='navbar-item'>About</li>
          <li className='navbar-item'>Projects</li>
        </div>
        <div className='nav-right'>
          <li className='navbar-item logo'>LOGO</li>
        </div>
      </ul>
    </>
  );
};

export default Navbar;
