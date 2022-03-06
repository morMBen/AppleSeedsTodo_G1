import { Project } from './Welcomepage';
import { Task } from './Welcomepage';

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

export const data: Project[] = [project1, project2, project3];
