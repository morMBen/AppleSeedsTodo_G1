import express, { Express } from 'express';
import cors from 'cors';
import morgan from 'morgan';
import helmet from 'helmet';
import { corsConfig } from './config';
import UserRoutes from './routes/user.routes';
import ProjectRoutes from './routes/project.routes';
import TaskRoutes from './routes/tasks.routes';
import router from './routes/routerIndex';

const app: Express = express();

app.use(cors(corsConfig));
app.use(morgan('dev'));
app.use(helmet());
app.use(express.json({}));
app.use(express.urlencoded({ extended: false }));

// app.use('/api/users', UserRoutes);
// app.use('/api/projects', ProjectRoutes);
// app.use('/api/tasks', TaskRoutes);
app.use('/api', router);

app.use('*', ((err, req, res, next) => {
  res.status(404).send('Not Found');
}) as express.ErrorRequestHandler);

export { app };
