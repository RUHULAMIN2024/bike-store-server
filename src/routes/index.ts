import { Router } from 'express';
import productRouter from '../module/product/product.route';
import orderRouter from '../module/order/order.route';
import userRouter from '../module/user/user.router';

const router = Router();

const moduleRoutes = [
  {
    path: '/auth',
    route: userRouter,
  },

  {
    path: '/product',
    route: productRouter,
  },
  {
    path: '/order',
    route: orderRouter,
  },
];

moduleRoutes.forEach((route) => router.use(route.path, route.route));

export default router;
