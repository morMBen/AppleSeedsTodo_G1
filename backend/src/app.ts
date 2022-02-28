import express, { Express } from 'express';
import cors from 'cors';
import morgan from 'morgan';
import helmet from 'helmet';
import { corsConfig } from './config';
import UserRoutes from './routes/user.routes';
import ProjectRoutes from './routes/project.routes';

const app: Express = express();

app.use(cors(corsConfig));
app.use(morgan('dev'));
app.use(helmet());
app.use(express.json({}));
app.use(express.urlencoded({ extended: false }));

app.use('/api/users', UserRoutes);
app.use('/api/projects', ProjectRoutes);

app.use('*', ((err, req, res, next) => {
  res.status(500).send('Server Error');
}) as express.ErrorRequestHandler);

export { app };
