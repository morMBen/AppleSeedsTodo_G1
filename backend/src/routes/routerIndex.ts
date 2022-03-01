import express from 'express';
import UserRoutes from './user.routes';
import ProjectRoutes from './project.routes';
import TaskRoutes from './tasks.routes';

const router = express.Router();

router.use('/users', UserRoutes);
router.use('/projects', ProjectRoutes);
router.use('/tasks', TaskRoutes);

export default router;
