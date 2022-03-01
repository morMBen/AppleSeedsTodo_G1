import express, { Express } from 'express';
import UserRoutes from './user.routes';
import ProjectRoutes from './project.routes';
import TaskRoutes from './tasks.routes';

const router = express.Router();

router.use('/user', UserRoutes)
router.use('/project', ProjectRoutes)
router.use('/task', TaskRoutes)


export default router;
