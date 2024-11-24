/* eslint-disable @typescript-eslint/no-explicit-any */
import { Request, Response } from 'express';
import { orderService } from './order.service';

const createOrder = async (req: Request, res: Response) => {
  try {
    const data = req.body;
    const result = await orderService.createOrder(data);

    res.status(200).json({
      success: true,
      message: 'Order created successfully',
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

const getOrders = async (req: Request, res: Response) => {
  try {
    const result = await orderService.getOrders();

    res.status(200).json({
      success: true,
      message: 'Orders get successfully',
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

const getSingleOrder = async (req: Request, res: Response) => {
  try {
    const id = req.params.orderId;
    const result = await orderService.getSingleOrder(id);

    res.status(200).json({
      success: true,
      message: 'Order get successfully',
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

const updateOrder = async (req: Request, res: Response) => {
  try {
    const id = req.params.orderId;
    const body = req.body;
    const result = await orderService.updateOrder(id, body);

    res.status(200).json({
      success: true,
      message: 'Order updated successfully',
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
const deleteOrder = async (req: Request, res: Response) => {
  try {
    const id = req.params.id;
    const result = await orderService.deleteOrder(id);

    res.status(200).json({
      success: true,
      message: 'Order deleted successfully',
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
