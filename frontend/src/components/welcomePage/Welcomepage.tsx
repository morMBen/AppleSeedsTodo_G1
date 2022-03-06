import React, { useState } from 'react';
import Spinner from './Spinner';
import BackLog from '../backLog/BackLog';

import { connect } from 'react-redux';
import { addTask } from '../../redux/actions';
import { Dispatch } from 'react';
import { TasksState } from '../../redux/taskReducer';
import './welcomePage.css';
import { data } from '../../mockData';
import { BrowserRouter as Router, Link } from 'react-router-dom';

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

export default function _WelcomePage() {
  //refactor to redux
  const [tasks, setTasks] = useState<Project[]>([]);
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
      {/* {console.log(props.tasks) } */}
      <h1>Projects</h1> {loading ? <Spinner /> : renderProjects()}
      <Link to='/BackLog'>hhhh</Link>;
    </div>
  );
}
const stateProps = ({ tasks }: TasksState) => {
  return { tasks };
};
export const WelcomePage = connect(stateProps, { addTask })(_WelcomePage);
