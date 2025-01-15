/* eslint-disable @typescript-eslint/no-explicit-any */
import { Request, Response } from 'express';
import { orderService } from './order.service';
import catchAsync from '../../utils/catchAsync';
import sendResponse from '../../utils/sendResponse';
import { StatusCodes } from 'http-status-codes';

const createOrder = catchAsync(async (req, res) => {
  const data = req.body;
  const result = await orderService.createOrder(data);

  sendResponse(res, {
    statusCode: StatusCodes.CREATED,
    success: true,
    message: 'Order  created successfully',
    data: result,
  });
});

const getOrders = catchAsync(async (req, res) => {
  const result = await orderService.getOrders();

  sendResponse(res, {
    statusCode: StatusCodes.OK,
    success: true,
    message: 'Order  retrived successfully',
    data: result,
  });
});

const getSingleOrder = catchAsync(async (req, res) => {
  const id = req.params.orderId;
  const result = await orderService.getSingleOrder(id);

  sendResponse(res, {
    statusCode: StatusCodes.OK,
    success: true,
    message: 'Order  retrived successfully',
    data: result,
  });
});

const updateOrder = catchAsync(async (req, res) => {
  const id = req.params.orderId;
  const body = req.body;
  const result = await orderService.updateOrder(id, body);

  sendResponse(res, {
    statusCode: StatusCodes.OK,
    success: true,
    message: 'Order  updated successfully',
    data: result,
  });
});

const deleteOrder = catchAsync(async (req, res) => {
  const id = req.params.id;
  const result = await orderService.deleteOrder(id);

  sendResponse(res, {
    statusCode: StatusCodes.OK,
    success: true,
    message: 'Order  deleted successfully',
    data: result,
  });
});

const getRevenue = async (req: Request, res: Response) => {
  try {
    const result = await orderService.getRevenue();

    res.status(200).json({
      success: true,
      message: 'Revenue get successfully',
      data: result,
    });
  } catch (error: any) {
    const statusCode = error.status || 500;
    res.status(statusCode).json({
      success: false,
      message: error.message || 'Internal Server Error',
      error,
      stack: error.stack,
    });
  }
};

export const orderController = {
  createOrder,
  getOrders,
  getSingleOrder,
  updateOrder,
  deleteOrder,
  getRevenue,
};
