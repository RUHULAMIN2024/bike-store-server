import { Router } from 'express';
import { orderController } from './order.controller';
import validateRequest from '../../middlewares/validateRequest';
import { orderValidationSchema } from './order.validation';

const orderRouter = Router();

orderRouter.get('/revenue', orderController.getRevenue);

orderRouter.get('/:orderId', orderController.getSingleOrder);
orderRouter.get('/', orderController.getOrders);
orderRouter.post(
  '/',
  validateRequest(orderValidationSchema),
  orderController.createOrder,
);
orderRouter.put('/:orderId', orderController.updateOrder);
orderRouter.delete('/:id', orderController.deleteOrder);

export default orderRouter;
