import { Request, Response } from 'express';
import { orderService } from './order.service';

const createOrder = async (req: Request, res: Response) => {
  try {
    const data = req.body;
    const result = await orderService.createOrder(data);

    res.status(200).json({
      success: true,
      message: 'Order created successfully',
      result,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Something went wrong',
      error,
    });
  }
};

const getOrders = async (req: Request, res: Response) => {
  try {
    const result = await orderService.getOrders();

    res.status(200).json({
      success: true,
      message: 'Orders get successfully',
      result,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Something went wrong',
      error,
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
      result,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Something went wrong',
      error,
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
      result,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Something went wrong',
      error,
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
      result,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Something went wrong',
      error,
    });
  }
};

const getRevenue = async (req: Request, res: Response) => {
  try {
    const result = await orderService.getRevenue();

    res.status(200).json({
      success: true,
      message: 'Revenue get successfully',
      result,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Something went wrong',
      error,
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
