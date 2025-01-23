import { Router } from 'express';
import { orderController } from './order.controller';

const orderRouter = Router();

orderRouter.get('/', orderController.getOrders);
orderRouter.post('/', orderController.createOrder);

export default orderRouter;
