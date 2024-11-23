/* eslint-disable @typescript-eslint/no-explicit-any */
import { Request, Response } from 'express';
import { productService } from './product.service';

const createProduct = async (req: Request, res: Response) => {
  try {
    const data = req.body;
    const result = await productService.createProduct(data);

    res.status(200).json({
      success: true,
      message: 'Product created successfully',
      result,
    });
  } catch (error: any) {
    const statusCode = error.status || 500;
    res.status(statusCode).json({
      message: error.message || 'Internal Server Error',
      success: false,
      error,
      stack: error.stack,
    });
  }
};

const getProducts = async (req: Request, res: Response) => {
  try {
    const result = await productService.getProducts();

    res.status(200).json({
      success: true,
      message: 'Products get successfully',
      result,
    });
  } catch (error: any) {
    const statusCode = error.status || 500;
    res.status(statusCode).json({
      message: error.message || 'Internal Server Error',
      success: false,
      error,
      stack: error.stack,
    });
  }
};

const getSingleProduct = async (req: Request, res: Response) => {
  try {
    const id = req.params.productId;
    const result = await productService.getSingleProduct(id);

    res.status(200).json({
      success: true,
      message: 'Product get successfully',
      result,
    });
  } catch (error: any) {
    const statusCode = error.status || 500;
    res.status(statusCode).json({
      message: error.message || 'Internal Server Error',
      success: false,
      error,
      stack: error.stack,
    });
  }
};

const updateProduct = async (req: Request, res: Response) => {
  try {
    const id = req.params.productId;
    const body = req.body;
    const result = await productService.updateProduct(id, body);

    res.status(200).json({
      success: true,
      message: 'Product updated successfully',
      result,
    });
  } catch (error: any) {
    const statusCode = error.status || 500;
    res.status(statusCode).json({
      message: error.message || 'Internal Server Error',
      success: false,
      error,
      stack: error.stack,
    });
  }
};
const deleteProduct = async (req: Request, res: Response) => {
  try {
    const id = req.params.id;
    const result = await productService.deleteProduct(id);

    res.status(200).json({
      success: true,
      message: 'Product deleted successfully',
      result,
    });
  } catch (error: any) {
    const statusCode = error.status || 500;
    res.status(statusCode).json({
      message: error.message || 'Internal Server Error',
      success: false,
      error,
      stack: error.stack,
    });
  }
};

export const productController = {
  createProduct,
  getProducts,
  getSingleProduct,
  updateProduct,
  deleteProduct,
};
