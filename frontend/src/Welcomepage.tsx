import React, { useState } from 'react';
import Spinner from './Spinner';
import BackLog from './BackLog';

import './welcomePage.css';
import { data } from './mockData';
import { Link } from 'react-router-dom';

export interface Project {
  _id: string;
  // user: ref
  title: string;
  description: string;
  goal: string;
  tasks: Task[];
  createdAt: Date;
  updatedAt: Date;
}
export interface Task {
  _id: string;
  title: string;
  description: string;
  urgency: Number; // 1-not urgent ... urgent
  isActive: Boolean;
  label: string;
  createdAt: Date;
  updatedAt: Date;
}

export default function Welcomepage() {
  //refactor to redux
  //const [tasks, setTasks] = useState<Project[]>([]);
  const [loading, setIsLoading] = useState(false);

  const renderProjects = () => {
    const renderedResults = data.map((project) => {
      return (
        <div className='project-card' key={project._id} onClick={() => {}}>
          <p className='project-paragraph'>
            <strong>Title:</strong> {project.title}
          </p>
          <p className='project-paragraph'>
            <strong>description:</strong> {project.description}
          </p>
          <p className='project-paragraph'>
            <strong>goal:</strong> {project.goal}
          </p>
        </div>
      );
    });
    return renderedResults;
  };

  return (
    <div className='welcome-page'>
      <h1>Projects</h1> {loading ? <Spinner /> : renderProjects()}
      <Link to='/BackLog'>hhhh</Link>;
    </div>
  );
}
