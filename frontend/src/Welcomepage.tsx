import React, { useState } from 'react';
import { ReactElement } from 'react';
import Spinner from './Spinner';
import { connect, useDispatch, useSelector } from 'react-redux';
import { addTask, addTodo } from './redux/actions';
import { Dispatch } from 'react';
//import ProjectCard from './ProjectCard';
import { TasksState } from './redux/taskReducer';
import './welcomePage.css';

interface Project {
  _id: string;
  // user: ref
  title: string;
  description: string;
  goal: string;
  tasks: Task[];
  createdAt: Date;
  updatedAt: Date;
}
interface Task {
  _id: string;
  title: string;
  description: string;
  urgency: Number; // 1-not urgent ... urgent
  isActive: Boolean;
  label: string;
  createdAt: Date;
  updatedAt: Date;
}

const task1: Task = {
  _id: 'abc1',
  title: 'title1',
  description:
    'Cras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque.',
  urgency: 1,
  isActive: true,
  label: 'todo',
  createdAt: new Date(),
  updatedAt: new Date(),
};

const task2: Task = {
  _id: 'abc2',
  title: 'title2',
  description:
    'Cras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque.',
  urgency: 2,
  isActive: true,
  label: 'process',
  createdAt: new Date(),
  updatedAt: new Date(),
};

const task3: Task = {
  _id: 'abc3',
  title: 'title3',
  description:
    'Cras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque.',
  urgency: 3,
  isActive: true,
  label: 'done',
  createdAt: new Date(),
  updatedAt: new Date(),
};
const project1: Project = {
  _id: '123a',
  title: 'Appleseeds Todo1',
  description: 'Praesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede.',
  goal: 'Nam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla.',
  tasks: [task1, task2, task3],
  createdAt: new Date(),
  updatedAt: new Date(),
};
const project2: Project = {
  _id: '124a',
  title: 'Appleseeds Todo2',
  description: 'Praesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede.',
  goal: 'Nam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla.',
  tasks: [task1, task2, task3],
  createdAt: new Date(),
  updatedAt: new Date(),
};
const project3: Project = {
  _id: '125a',
  title: 'Appleseeds Todo2',
  description: 'Praesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede.',
  goal: 'Nam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla.',
  tasks: [task1, task2, task3],
  createdAt: new Date(),
  updatedAt: new Date(),
};
const data: Project[] = [project1, project2, project3];

interface WelcomePageProps {
  tasks: string[];
  addTask: Function;
  addTodo: Function;
}
function _WelcomePage(props: WelcomePageProps) {
  // const [tasks, setTasks] = useState<Project[]>([]);
  // const [loading, setIsLoading] = useState(false);
  const dispatch = useDispatch();
  const state = useSelector((state) => state);
  console.log(state);

  const renderProjects = () => {
    let projects: ReactElement;
    const renderedResults = data.map((project) => {
      projects = (
        <div className='project-card' key={project._id} onClick={() => {}}>
          <p className='project-paragraph'>
            {' '}
            <strong>Title:</strong> {project.title}
          </p>
          <p className='project-paragraph'>
            {' '}
            <strong>description:</strong> {project.description}
          </p>
          <p className='project-paragraph'>
            <strong>goal:</strong> {project.goal}
          </p>
        </div>
      );
      return projects;
    });
    return renderedResults;
  };

  return (
    <div className='welcome-page'>
      {console.log(props.tasks)}
      <button onClick={() => props.addTodo('todo')}>On Click</button>
      <h1>Projects</h1> {loading ? <Spinner /> : renderProjects()}
    </div>
  );
}
const stateProps = ({ tasks }: TasksState) => {
  return { tasks };
};
export const WelcomePage = connect(stateProps, { addTask, addTodo })(_WelcomePage);
