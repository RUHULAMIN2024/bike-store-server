import { z } from 'zod';

const userValidationSchema = z.object({
  name: z.string().trim().min(1),
  email: z.string().email().trim(),
  password: z.string().min(6).trim(),
});

export default userValidationSchema;
