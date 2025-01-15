import { z } from 'zod';

export const orderValidationSchema = z.object({
  email: z.string().trim().toLowerCase().email('Invalid email address'),
  product: z.string().regex(/^[a-f\d]{24}$/i, 'Invalid product ID format'),
  quantity: z.number().min(1, 'Quantity must be at least 1'),
  totalPrice: z.number().min(0, 'Total price must be a non-negative number'),
});
