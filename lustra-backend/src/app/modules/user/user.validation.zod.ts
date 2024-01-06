import { z } from 'zod';

const createUserSchema = z.object({
  body: z.object({
    username: z.string(),
    email: z.string(),
    password: z.string(),
    profile_picture: z.string().optional(),
    bio: z.string().optional(),
  }),
});

export const UserZodValidationSchema = { createUserSchema };
