import { Request, Response } from 'express';
import catchAsync from '../../utils/catchAsync';
import sendResponse from '../../utils/sendResponse';
import { UserService } from './user.service';
import httpStatus from 'http-status';
import { StatusCodes } from 'http-status-codes';

const registerUser = catchAsync(async (req: Request, res: Response) => {
  const data = await UserService.registerUser(req.body);
  sendResponse(res, {
    statusCode: httpStatus.CREATED,
    success: true,

    message: 'Registered successfully',
    data,
  });
});

const loginUser = catchAsync(async (req: Request, res: Response) => {
  const data = await UserService.loginUser(req.body);
  sendResponse(res, {
    statusCode: httpStatus.ACCEPTED,
    success: true,

    message: 'Logged in successfully',
    data,
  });
});

const getAllCustomer = catchAsync(async (req, res) => {
  const result = await UserService.getAllCustomer();

  sendResponse(res, {
    statusCode: StatusCodes.OK,
    success: true,
    message: 'customer retrieved successfully',
    data: result,
  });
});
const getSingleUser = catchAsync(async (req, res) => {
  const email = req.params.email;
  const result = await UserService.getSingleUser(email);

  sendResponse(res, {
    statusCode: StatusCodes.OK,
    success: true,
    message: 'user retrieved successfully',
    data: result,
  });
});

const deleteCustomer = catchAsync(async (req, res) => {
  const id = req.params.id;
  const result = await UserService.deleteCustomer(id);

  sendResponse(res, {
    statusCode: StatusCodes.OK,
    success: true,
    message: 'User  deleted successfully',
    data: result,
  });
});

const updatePassword = catchAsync(async (req, res) => {
  const { email } = req.params;
  const { newPassword } = req.body;
  console.log(email, newPassword);
  const result = await UserService.updatePassword(email, newPassword);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Password  updated successfully',
    data: result,
  });
});

export const UserController = {
  registerUser,
  loginUser,
  getSingleUser,
  getAllCustomer,
  deleteCustomer,
  updatePassword,
};
