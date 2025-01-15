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

// get all product with filter
const getProducts = async (req: Request, res: Response) => {
  try {
    const { searchTerm } = req.query;
    const filter: any = {};

    if (searchTerm) {
      filter.$or = [
        { name: { $regex: searchTerm, $options: 'i' } },
        { brand: { $regex: searchTerm, $options: 'i' } },
        { category: { $regex: searchTerm, $options: 'i' } },
      ];
    }

    const result = await productService.getProducts(filter);

    if (result.length == 0) {
      res.status(404).json({
        success: false,
        message: 'Product not found',
      });
    }

    res.status(200).json({
      success: true,
      message: 'Bikes retrieved successfully',
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

// get single product by id
const getSingleProduct = async (req: Request, res: Response) => {
  try {
    const id = req.params.productId;
    const result = await productService.getSingleProduct(id);
    // if (!result) {
    //   res.status(404).json({
    //     success: false,
    //     message: 'product not found',
    //   });
    // }
    res.status(200).json({
      success: true,
      message: 'Product get successfully',
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

// update product by id

const updateProduct = async (req: Request, res: Response) => {
  try {
    const id = req.params.productId;
    const body = req.body;
    const result = await productService.updateProduct(id, body);
    if (!result) {
      res.status(404).json({
        success: false,
        message: 'product not found',
      });
    }
    res.status(200).json({
      success: true,
      message: 'Product updated successfully',
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

// delete single product by id

const deleteProduct = async (req: Request, res: Response) => {
  try {
    const id = req.params.id;
    const result = await productService.deleteProduct(id);
    if (!result) {
      res.status(404).json({
        success: false,
        message: 'product not found',
      });
    }
    res.status(200).json({
      success: true,
      message: 'Product deleted successfully',
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

export const productController = {
  createProduct,
  getProducts,
  getSingleProduct,
  updateProduct,
  deleteProduct,
};
