import { Router } from 'express';
import { orderController } from './order.controller';

const orderRouter = Router();

orderRouter.get('/revenue', orderController.getRevenue);

orderRouter.get('/:orderId', orderController.getSingleOrder);
orderRouter.get('/', orderController.getOrders);
orderRouter.post('/', orderController.createOrder);
orderRouter.put('/:orderId', orderController.updateOrder);
orderRouter.delete('/:id', orderController.deleteOrder);

export default orderRouter;
