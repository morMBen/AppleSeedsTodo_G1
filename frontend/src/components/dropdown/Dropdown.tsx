import React, { useState } from 'react';
import './Dropdown.css';

const Dropdown = ({setIsClicked}:any) => {
  const [projects, setProjects] = useState([
    { _id: 1, name: 'Project1' },
    { _id: 2, name: 'Project2' },
    { _id: 3, name: 'Project3' },
    { _id: 4, name: 'Project4' },
  ]);

  const selectProject = (e: any) => {
    setIsClicked(false);
    console.log(e.target)
  };

  return (
    <ul className='dropdown-list'>
      {projects.map((project) => {
        {
          return (
            <li onClick={selectProject} className='dropdown-item' key={project._id}>
              {project.name}
            </li>
          );
        }
      })}
    </ul>
  );
};

export default Dropdown;
