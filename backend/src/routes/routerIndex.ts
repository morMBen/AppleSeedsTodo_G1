import express, { Request, Response } from 'express';
import UserRoutes from './user.routes';
import ProjectRoutes from './project.routes';
import TaskRoutes from './tasks.routes';

const router = express.Router();
router.get('/healthcheck', (req: Request, res: Response) => {
  return res.sendStatus(200);
});

router.use('/users', UserRoutes);
router.use('/projects', ProjectRoutes);
router.use('/tasks', TaskRoutes);

export default router;
