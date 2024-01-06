import { Router } from 'express';
import { CoursesControllers } from './courses.controllers';
import zodValidation from '../../middlewares/validations/zodValidations';
import { CourseZodValidationSchema } from '../course/course.validation.zod';
import checkAuth from '../../middlewares/checkAuth';
import { BlogsControllers } from './blogs.controllers';

const router = Router();
router.get('/', BlogsControllers.getAllBlogs);
router.get('/:id', BlogsControllers.getSingleBlog);
// router.put(
//   '/:courseId',
//   zodValidation(CourseZodValidationSchema.updateCourseSchema),
//   checkAuth('admin'),
//   CoursesControllers.updateCourseDataIntoDB,
// );
// router.get('/:courseId/reviews', CoursesControllers.getCourseReviewsById);
export const BlogsRoute = router;
