import { StatusCodes } from 'http-status-codes';
import catchAsync from '../../utils/catchAsync';
import sendResponse from '../../utils/sendResponse';
import { productService } from './product.service';

const createProduct = catchAsync(async (req, res) => {
  const productData = req.body;
  const result = await productService.createProduct(productData);
  console.log(productData);
  sendResponse(res, {
    statusCode: StatusCodes.CREATED,
    success: true,
    message: 'Product  created successfully',
    data: result,
  });
});

const getAllProducts = catchAsync(async (req, res) => {
  const result = await productService.getAllProducts(req.query);

  sendResponse(res, {
    statusCode: StatusCodes.OK,
    success: true,
    message: 'Product  retrieved successfully',
    data: result,
  });
});

const getSingleProduct = catchAsync(async (req, res) => {
  const productId = req.params.productId;
  const result = await productService.getSingleProduct(productId);

  sendResponse(res, {
    statusCode: StatusCodes.OK,
    success: true,
    message: 'Product  retrieved successfully',
    data: result,
  });
});

const updateProduct = catchAsync(async (req, res) => {
  const productId = req.params.productId;
  const body = req.body;
  const result = await productService.updateProduct(productId, body);

  sendResponse(res, {
    statusCode: StatusCodes.OK,
    success: true,
    message: 'Product  updated successfully',
    data: result,
  });
});

const deleteProduct = catchAsync(async (req, res) => {
  const productId = req.params.id;
  const result = await productService.deleteProduct(productId);

  sendResponse(res, {
    statusCode: StatusCodes.OK,
    success: true,
    message: 'Product  deleted successfully',
    data: result,
  });
});

export const productController = {
  createProduct,
  getAllProducts,
  getSingleProduct,
  updateProduct,
  deleteProduct,
};
