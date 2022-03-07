import React, { useState } from 'react';
import { Project } from './welcomePage/Welcomepage';
import { data } from '../mockData';
import ProjectCardPage from './ProjectCardPage';
import { BrowserRouter as Router, Link } from 'react-router-dom';
import './ProjectCard.css';

export default function ProjectCard(props: any) {
  const [projects, setProjects] = useState<Project[]>(data);
  //   const id = props._id;
  //   console.log(id);

  return (
    <div className='container-div'>
      <div className='project-card' key={props._id}>
        <p className='project-paragraph'>
          <strong>Title:</strong> {props.title}
        </p>
        <p className='project-paragraph'>
          <strong>description:</strong> {props.description}
        </p>
        <p className='project-paragraph'>
          <strong>goal:</strong> {props.goal}
        </p>
      </div>
      {/* <button
        onClick={() => {
          return <ProjectCardPage id={props.id}></ProjectCardPage>;
        }}
      >
        move to Project
      </button> */}
    </div>
  );
}
