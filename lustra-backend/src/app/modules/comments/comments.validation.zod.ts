import { z } from 'zod';

const CommentSchema = z.object({
  body: z.object({
    commentedBy: z.string(),
    blogId: z.string(),
    text: z.string(),
    reaction: z.number().optional(),
  }),
});

export const CommentZodValidationSchema = { CommentSchema };
