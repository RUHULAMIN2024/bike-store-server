import { z } from 'zod';

export const productValidationSchema = z.object({
  name: z.string().trim().min(1, 'Name is required'),
  brand: z.string().trim().min(1, 'Brand is required'),
  price: z.number().min(0, 'Price must be a non-negative number'),
  category: z.enum(['Mountain', 'Road', 'Hybrid', 'Electric'], {
    errorMap: () => ({
      message: 'Category must be one of: Mountain, Road, Hybrid, Electric',
    }),
  }),
  description: z.string().trim().min(1, 'Description is required'),
  quantity: z.number().min(0, 'Quantity must be a non-negative number'),
  inStock: z.boolean().default(true),
});
