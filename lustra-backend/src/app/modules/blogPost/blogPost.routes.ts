import { Router } from 'express';
import { CourseController } from './blogPost.controllers';
import zodValidation from '../../middlewares/validations/zodValidations';
import { BlogPostValidationSchema } from './blogPost.validation.zod';

// import checkAuth from '../../middlewares/checkAuth';
// checkAuth('admin')

const router = Router();

router.post(
  '/create-blog',
  zodValidation(BlogPostValidationSchema.createBlogSchema),
  CourseController.createBlogPost,
);

export const BlogPostRoutes = router;
