import { Router } from 'express';
import { userRoutes } from '../module/user/user.route';
import productRouter from '../module/product/product.route';
import orderRouter from '../module/order/order.route';

const router = Router();

const moduleRoutes = [
  {
    path: '/auth',
    route: userRoutes,
  },

  {
    path: '/products',
    route: productRouter,
  },
  {
    path: '/orders',
    route: orderRouter,
  },
];

moduleRoutes.forEach((route) => router.use(route.path, route.route));

export default router;
