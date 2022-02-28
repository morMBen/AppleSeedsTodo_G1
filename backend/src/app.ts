import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
import helmet from 'helmet';
import { corsConfig } from './config';

const app = express();

app.use(cors(corsConfig));
app.use(morgan('dev'));
app.use(helmet());
app.use(express.json({}));
app.use(express.urlencoded({ extended: false }));

app.use('*', ((err, req, res, next) => {
  res.status(500).send('Server Error');
}) as express.ErrorRequestHandler);
export { app };
