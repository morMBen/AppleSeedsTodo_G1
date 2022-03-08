// user: {
//   _id: string
//   name: string
//   email: string
//   password: string
//   projects: ref[]
//   createdAt: Date
//   updatedAt: Date
// }

export interface Task {
  // projectId: string
  _id: string
  title: string
  description: string
  urgency: number // 1-not urgent ... urgent
  isActive: boolean
  label: string
  createdAt?: Date
  updatedAt?: Date
}

export interface Project {
  _id?: string
  // user: ref
  title: string
  description: string
  goal: string
  tasks?: Task[]
  createdAt?: Date
  updatedAt?: Date
}

const task1: Task = {
  _id: "abc1",
  title: "task1",
  description: "Cras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque.",
  urgency: 1,
  isActive: true,
  label: "todo",
  createdAt: new Date,
  updatedAt: new Date,
}

const task2: Task = {
  _id: "abc2",
  title: "task2",
  description: "Cras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque.",
  urgency: 2,
  isActive: true,
  label: "process",
  createdAt: new Date,
  updatedAt: new Date,
}

const task3: Task = {
  _id: "abc3",
  title: "task3",
  description: "Cras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque.",
  urgency: 3,
  isActive: true,
  label: "done",
  createdAt: new Date,
  updatedAt: new Date,
}

const project1: Project = {
  _id: "123a",
  title: "Appleseeds Todo 1",
  description: "Praesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede.",
  goal: "Nam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla.",
  tasks: [task1, task2, task3],
  createdAt: new Date,
  updatedAt: new Date,
}

const project2: Project = {
  _id: "456b",
  title: "Appleseeds Todo 2",
  description: "Praesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede.",
  goal: "Nam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla.",
  tasks: [task1, task2, task3],
  createdAt: new Date,
  updatedAt: new Date,
}

const projects: Project[] = [project1, project2];

export default projects;



// request: 
//   params: objectId (string)

// response:
//   {
//     ok (boolean),
//     data: {
//       objectId (string) || null
//     },
//     message (string)
//   }
