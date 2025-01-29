import catchAsync from '../../utils/catchAsync';
import sendResponse from '../../utils/sendResponse';
import { orderService } from './order.service';
import httpStatus from 'http-status';

const createOrder = catchAsync(async (req, res) => {
  const user = req.user;

  console.log(user);
  const order = await orderService.createOrder(user, req.body, req.ip!);

  sendResponse(res, {
    statusCode: httpStatus.CREATED,
    message: 'Order placed successfully',
    data: order,
    success: true,
  });
});

const getOrders = catchAsync(async (req, res) => {
  const order = await orderService.getOrders();
  console.log(order);
  sendResponse(res, {
    statusCode: httpStatus.CREATED,
    message: 'Order retrieved successfully',
    data: order,
    success: true,
  });
});

const verifyPayment = catchAsync(async (req, res) => {
  const order = await orderService.verifyPayment(req.query.order_id as string);

  sendResponse(res, {
    statusCode: httpStatus.CREATED,
    message: 'Order verified successfully',
    data: order,
    success: true,
  });
});

const getMyOrder = catchAsync(async (req, res) => {
  const userId = req?.user?._id;
  const result = await orderService.getMyOrder(userId);

  sendResponse(res, {
    statusCode: httpStatus.CREATED,
    message: 'Order retrieved successfully',
    data: result,
    success: true,
  });
});

const deleteOrder = catchAsync(async (req, res) => {
  const id = req.params.id;
  const result = await orderService.deleteOrder(id);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'order  deleted successfully',
    data: result,
  });
});

const updateOrderStatus = catchAsync(async (req, res) => {
  const id = req.params.id;
  const body = req.body;
  const result = await orderService.updateOrderStatus(id, body);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Product  updated successfully',
    data: result,
  });
});

export const orderController = {
  createOrder,
  verifyPayment,
  getOrders,
  getMyOrder,
  deleteOrder,
  updateOrderStatus,
};
