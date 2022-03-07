import React, { useState } from 'react'
import "./Dropdown.css";

const Dropdown = () => {
  const [dropdown,setDropdown] = useState(false);

  const openDropdown = ()=>{
      
  }

  return (
    <ul className="dropdown-list">
      <li className="dropdown-item">Project 1</li>
      <li className="dropdown-item">Project 2</li>
      <li className="dropdown-item">Project 3</li>
    </ul>
  )
}

export default Dropdown