import { z } from 'zod';

export const productValidationSchema = z.object({
  name: z.string().trim(),
  brand: z.string().trim(),
  model: z.string().trim(),

  price: z.number(),
  category: z.string(),
  description: z.string().trim(),
  stock: z.number(),
});
