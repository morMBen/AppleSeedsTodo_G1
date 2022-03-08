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
import ProjectCard from '../ProjectCard';
import { useSelector } from 'react-redux';

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
  //needs typescript..
  const state = useSelector((state) => state);

  const renderProjects = () => {
    const renderedResults = data.map((project) => {
      return (
        <div>
          <Link to={`./projects/:${project._id}`} key={project._id}>
            <ProjectCard
              project={project}
              key={project._id}
              title={project.title}
              description={project.description}
              goal={project.goal}
            ></ProjectCard>
          </Link>
        </div>
      );
    });
    return renderedResults;
  };

  return (
    <div className='welcome-page'>
      <h1>Projects</h1> {loading ? <Spinner /> : renderProjects()}
    </div>
  );
}
const stateProps = ({ tasks }: TasksState) => {
  return { tasks };
};
export const WelcomePage = connect(stateProps, { addTask })(_WelcomePage);
