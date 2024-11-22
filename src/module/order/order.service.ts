import { IOrder } from './order.interface';
import Order from './order.model';

const createOrder = async (data: IOrder) => {
  const result = await Order.create(data);
  return result;
};

const getOrders = async () => {
  const result = await Order.find();
  return result;
};

const getSingleOrder = async (id: string) => {
  const result = await Order.findById(id);
  return result;
};

const updateOrder = async (id: string, data: Partial<IOrder>) => {
  const result = await Order.findByIdAndUpdate(id, data);
  return result;
};

const deleteOrder = async (id: string) => {
  const result = await Order.findByIdAndDelete(id);
  return result;
};

const getRevenue = async () => {
  const result = await Order.aggregate([
    {
      $group: {
        _id: null,
        totalRevenue: { $sum: '$totalPrice' },
      },
    },
  ]);
  return result;
};

export const orderService = {
  createOrder,
  getOrders,
  getSingleOrder,
  updateOrder,
  deleteOrder,
  getRevenue,
};
