import { model, Schema } from 'mongoose';
import { IProduct } from './product.interface';

const productSchema = new Schema<IProduct>(
  {
    name: {
      type: String,
      required: [true, 'name is required'],
      trim: true,
    },
    brand: {
      type: String,
      required: [true, 'brand is required'],
      trim: true,
    },
    price: {
      type: Number,
      required: [true, 'price is required'],
      min: 0,
    },
    model: {
      type: String,
      required: [true, 'Model is required'],
      trim: true,
    },
    category: {
      type: String,
      required: [true, 'category is required'],
    },
    description: {
      type: String,
      required: [true, 'description is required'],
      trim: true,
    },
    stock: {
      type: Number,
      required: [true, 'quantity is required'],
      min: 0,
    },
    image: {
      type: String,
      default: '',
    },
  },
  { timestamps: true },
);

const Product = model<IProduct>('Product', productSchema);

export default Product;
