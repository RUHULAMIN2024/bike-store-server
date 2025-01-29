import { Router } from 'express';
import { UserController } from './user.controller';

const userRouter = Router();

userRouter.post('/register', UserController.registerUser);
userRouter.post('/login', UserController.loginUser);
userRouter.get('/customer', UserController.getAllCustomer);
userRouter.delete('/customer/:id', UserController.deleteCustomer);
userRouter.get('/user/:email', UserController.getSingleUser);
userRouter.patch('/:email/password', UserController.updatePassword);

export default userRouter;
