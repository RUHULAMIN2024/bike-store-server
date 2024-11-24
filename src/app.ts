import express, { Application, NextFunction, Request, Response } from 'express';
import cors from 'cors';

import productRouter from './module/product/product.route';
import orderRouter from './module/order/order.route';
const app: Application = express();

app.use(express.json());
app.use('/api/products', productRouter);
app.use('/api/orders', orderRouter);
app.use(cors());

export interface CustomError extends Error {
  status?: number;
}
app.use(
  // eslint-disable-next-line no-unused-vars, @typescript-eslint/no-unused-vars
  (error: CustomError, req: Request, res: Response, next: NextFunction) => {
    const statusCode = error.status || 500;
    res.status(statusCode).json({
      success: false,
      message: error.message || 'Internal Server Error',
      error,
      stack: error.stack,
    });
  },
);

app.get('/', (req: Request, res: Response) => {
  res.send('Hello World!');
});

export default app;
