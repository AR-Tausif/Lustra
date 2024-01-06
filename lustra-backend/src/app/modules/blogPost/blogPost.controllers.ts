import {} from 'express';
import sendResponds from '../../utils/sendResponds';
import httpStatus from 'http-status';

import CatchAsync from '../../utils/catchAsync';
import { BlogPostServices } from './blogPost.services';
const createBlogPost = CatchAsync(async (req, res) => {
  const data = await BlogPostServices.createBlogPoseService(req.body);

  sendResponds(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: 'Blog Created Successfully',
    data: data,
  });
});

// const getBestBlogFromDB: RequestHandler = async (req, res, next) => {
//   try {
//      const data = await BlogPostServices.();
//     sendResponds(res, {
//       success: true,
//       statusCode: httpStatus.OK,
//       message: 'reviews get succesfully',
//       data,
//     });
//   } catch (error) {
//     next(error);
//   }
// };

export const CourseController = {
  createBlogPost,
};
