import mongoose from 'mongoose';
import { TaskDocument } from './task.model';


export interface ProjectDocument extends mongoose.Document {
  title: string;
  description: string;
  goal: string;
  tasks: TaskDocument[];
  createdAt: Date;
  updatedAt: Date;
}

const projectSchema = new mongoose.Schema({
  title: {
    type: String,
    default: `New Project ${(new Date).toISOString()}`,
  },
  description: {
    type: String,
    default: "",
  },
  goal: {
    type: String,
    default: "",
  },
  tasks: {
    type: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Task' }]
  }
}, {
  timestamps: true,
});

const ProjectModel = mongoose.model<ProjectDocument>('Project', projectSchema);

export default ProjectModel;
