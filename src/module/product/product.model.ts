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
    category: {
      type: String,
      required: [true, 'category is required'],
      enum: {
        values: ['Mountain', 'Road', 'Hybrid', 'Electric'],
        message: '{VALUE} is not a valid',
      },
    },
    description: {
      type: String,
      required: [true, 'description is required'],
      trim: true,
    },
    quantity: {
      type: Number,
      required: [true, 'quantity is required'],
      min: 0,
    },
    inStock: {
      type: Boolean,
      required: true,
      default: true,
    },
  },
  { timestamps: true },
);

const Product = model<IProduct>('Product', productSchema);

export default Product;
