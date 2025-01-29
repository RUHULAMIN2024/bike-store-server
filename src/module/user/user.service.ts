import { IUser } from './user.interface';
import User from './user.model';
import bcrypt from 'bcrypt';

const registerUser = async (userData: IUser) => {
  const user = new User(userData);
  await user.save();
  return user;
};

const loginUser = async (payload: IUser) => {
  const user = await User.findOne({ email: payload.email }).select(
    'password email role',
  );
  if (!user || !(await user.comparePassword(payload.password))) {
    throw new Error('Invalid email or password');
  }

  const accessToken = await user.generateToken();
  return accessToken;
};

const getAllCustomer = async () => {
  const result = await User.find({ role: 'customer' });
  return result;
};
const getSingleUser = async (email: string) => {
  const result = await User.find({ email });
  return result;
};

const updatePassword = async (email: string, newPassword: string) => {
  const user = await User.findOne({ email });
  console.log(newPassword);
  if (!user) {
    throw new Error('User not found');
  }

  // Hash the new password
  const hashedPassword = await bcrypt.hash(newPassword, 10);
  user.password = hashedPassword;
  const result = await user.save();

  return result;
};

const deleteCustomer = async (id: string) => {
  const result = await User.findByIdAndDelete(id);
  return result;
};

export const UserService = {
  registerUser,
  loginUser,
  getSingleUser,
  getAllCustomer,
  updatePassword,
  deleteCustomer,
};
