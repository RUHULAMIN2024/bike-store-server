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
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Something went wrong',
      error,
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
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Something went wrong',
      error,
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
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Something went wrong',
      error,
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
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Something went wrong',
      error,
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
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Something went wrong',
      error,
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
