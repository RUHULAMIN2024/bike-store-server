import express from 'express';
import validateRequest from '../../middlewares/validateRequest';
import { UserController } from './user.controller';
import userValidationSchema from './user.validation';
const router = express.Router();

router.post(
  '/register',
  validateRequest(userValidationSchema),
  UserController.registerUser,
);
router.post('/login', UserController.loginUser);

export const userRoutes = router;
