import express, { Application, Request, Response } from 'express';
import cors from 'cors';

import productRouter from './module/product/product.route';
import orderRouter from './module/order/order.route';
import globalErrorHandler from './middlewares/globalErrorhandler';
import notFound from './middlewares/notFound';
const app: Application = express();

app.use(express.json());
app.use('/api/products', productRouter);
app.use('/api/orders', orderRouter);
app.use(cors());

export interface CustomError extends Error {
  status?: number;
}

app.get('/', (req: Request, res: Response) => {
  res.send('Hello World!');
});

app.use(globalErrorHandler);
app.use(notFound);

export default app;
