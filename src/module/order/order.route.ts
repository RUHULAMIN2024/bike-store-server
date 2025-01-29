import { Router } from 'express';
import { orderController } from './order.controller';
import auth from '../../middlewares/auth';
import { UserRole } from '../user/user.constants';

const orderRouter = Router();

orderRouter.get('/', orderController.getOrders);
orderRouter.put('/:id/status', orderController.updateOrderStatus);
orderRouter.delete('/:id', orderController.deleteOrder);
orderRouter.get('/verify', orderController.verifyPayment);
orderRouter.get(
  '/my-order',
  auth(UserRole.customer),
  orderController.getMyOrder,
);
orderRouter.post(
  '/',
  auth(UserRole.admin, UserRole.customer),
  orderController.createOrder,
);

export default orderRouter;
