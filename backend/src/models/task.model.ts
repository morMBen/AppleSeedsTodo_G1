import mongoose from 'mongoose';
import { ProjectDocument } from './project.model';

export interface TaskDocument extends mongoose.Document {
  project: ProjectDocument['_id'];
  title: string;
  description: string;
  urgency: number; // 1-not urgent ... urgent
  isActive: boolean;
  label: string;
  createdAt: Date;
  updatedAt: Date;
}

const taskSchema = new mongoose.Schema({
  title: {
    type: String,
    default: `New Task ${(new Date).toISOString()}`,
  },
  description: {
    type: String,
    default: "",
  },
  urgency: {
    type: Number, // 1-not urgent ... urgent
    default: 1,
  },
  isActive: {
    type: Boolean,
    default: false,
  },
  label: {
    type: String,
    default: "",
  },
}, {
  timestamps: true,
});

const TaskModel = mongoose.model<TaskDocument>('Task', taskSchema);

export default TaskModel;
