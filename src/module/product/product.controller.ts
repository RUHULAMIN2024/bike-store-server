import { StatusCodes } from 'http-status-codes';
import catchAsync from '../../utils/catchAsync';
import sendResponse from '../../utils/sendResponse';
import { productService } from './product.service';

const createProduct = catchAsync(async (req, res) => {
  const data = req.body;
  const result = await productService.createProduct(data);

  sendResponse(res, {
    statusCode: StatusCodes.CREATED,
    success: true,
    message: 'Product  created successfully',
    data: result,
  });
});

const getProducts = catchAsync(async (req, res) => {
  const result = await productService.getProducts();

  sendResponse(res, {
    statusCode: StatusCodes.OK,
    success: true,
    message: 'Product  retrived successfully',
    data: result,
  });
});

const getSingleProduct = catchAsync(async (req, res) => {
  const id = req.params.ProductId;
  const result = await productService.getSingleProduct(id);

  sendResponse(res, {
    statusCode: StatusCodes.OK,
    success: true,
    message: 'Product  retrived successfully',
    data: result,
  });
});

const updateProduct = catchAsync(async (req, res) => {
  const id = req.params.ProductId;
  const body = req.body;
  const result = await productService.updateProduct(id, body);

  sendResponse(res, {
    statusCode: StatusCodes.OK,
    success: true,
    message: 'Product  updated successfully',
    data: result,
  });
});

const deleteProduct = catchAsync(async (req, res) => {
  const id = req.params.id;
  const result = await productService.deleteProduct(id);

  sendResponse(res, {
    statusCode: StatusCodes.OK,
    success: true,
    message: 'Product  deleted successfully',
    data: result,
  });
});

export const productController = {
  createProduct,
  getProducts,
  getSingleProduct,
  updateProduct,
  deleteProduct,
};
