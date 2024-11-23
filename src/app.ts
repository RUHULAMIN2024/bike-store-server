import express, { Application, NextFunction, Request, Response } from 'express';
import cors from 'cors';

import productRouter from './module/product/product.route';
import orderRouter from './module/order/order.route';

const app: Application = express();

app.use(express.json());
app.use('/api/products', productRouter);
app.use('/api/orders', orderRouter);
app.use(cors());

// eslint-disable-next-line no-unused-vars, @typescript-eslint/no-unused-vars
app.use((req: Request, res: Response, next: NextFunction) => {
  res.status(404).json({
    success: false,
    message: 'Resource not found',
  });
});

export interface CustomError extends Error {
  status?: number;
}
// eslint-disable-next-line no-unused-vars, @typescript-eslint/no-unused-vars
app.use((err: CustomError, req: Request, res: Response, next: NextFunction) => {
  const statusCode = err.status || 500;
  console.log(statusCode);
  res.status(statusCode).json({
    success: false,
    message: err.message || 'Internal Server Error',
    stack: err.stack,
  });
});

app.get('/', (req: Request, res: Response) => {
  res.send('Hello World!');
});

export default app;
