import { z } from 'zod';

// Zod validation schema

const createBlogSchema = z.object({
  body: z.object({
    title: z.string(),
    content: z.string(),
    content_image: z.string().optional(),
    author: z.string(), // Assuming the author is a string (e.g., user ID)
    publication_date: z.string(),
    tags: z.array(z.string()),
    views: z.number(),
    likes: z.number(),
    comments: z.string().optional(),
  }),
});

export const BlogPostValidationSchema = {
  createBlogSchema,
};
