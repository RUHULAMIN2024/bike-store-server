/* eslint-disable @typescript-eslint/no-empty-object-type */
/* eslint-disable no-unused-vars */
import { Document, Model } from 'mongoose';

export interface IUser extends Document {
  name: string;
  email: string;
  password: string;
  role: 'user' | 'admin';
  phone?: string;
  address?: string;
  city?: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface IUserMethods {
  comparePassword(candidatePassword: string): Promise<boolean>;
  generateToken(): string;
}

// Create a new Model type that knows about IUserMethods...
type TUserModel = Model<IUser, {}, IUserMethods>;

export default TUserModel;
