import express, { Express, Request, Response } from 'express';
import cors from 'cors';
import morgan from 'morgan';
import helmet from 'helmet';
import { corsConfig } from './config';
import router from './routes/routerIndex';

const app: Express = express();

app.use(cors(corsConfig));
app.use(morgan('dev'));
app.use(helmet());
app.use(express.json({}));
app.use(express.urlencoded({ extended: false }));

// try {
  app.use('/api', router);
// } catch (error) {
//   throw "";
// }

app.use('*', ((err, req, res, next) => {
  res.status(404).send('Page Not Found');
}) as express.ErrorRequestHandler);

export { app };
