import express, { Application, Request, Response } from 'express';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import globalErrorHandler from './middlewares/globalErrorhandler';
import notFound from './middlewares/notFound';
import router from './routes';
const app: Application = express();

//parsers
app.use(express.json());
app.use(cookieParser());

app.use(
  cors({ origin: 'https://bike-store-frontend.vercel.app', credentials: true }),
);

// application routes
app.use('/api', router);

app.get('/', (req: Request, res: Response) => {
  res.send('Hello World!');
});

app.use(globalErrorHandler);
app.use(notFound);

export default app;
