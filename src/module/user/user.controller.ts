import { Request, Response } from 'express';
import catchAsync from '../../utils/catchAsync';
import sendResponse from '../../utils/sendResponse';
import { UserService } from './user.service';
import httpStatus from 'http-status';

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

export const UserController = {
  registerUser,
  loginUser,
};
