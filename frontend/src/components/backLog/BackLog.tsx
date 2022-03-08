import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { data } from '../../mockData';
import './backLog.css';

export default function BackLog(props: any) {
  interface Iparams {
    id: string;
  }
  let params: Iparams;
  params = useParams();
  const project: any = data.filter((project) => project._id === params.id.substring(1));
  console.log(project);

  function test() {
    let tasksArray = project[0].tasks;
    console.log(tasksArray);

    const renderedResults = tasksArray.map((task: any) => {
      return (
        <div key={task._id} className='renderedResults-container'>
          <span>title={task.title} </span>
          <span>date={task.createdAt.toString()} </span>
          <span>urgancy={task.urgency}</span>
        </div>
      );
    });
    return renderedResults;
  }

  return (
    <div className='backlog-component-container'>
      <div className='tasksHeaders-container'>
        <span>Task Name</span>
        <span>Task Date</span>
        <span>Task Urgency</span>
      </div>

      <div className='task-container'>{test()}</div>
    </div>
  );
}
