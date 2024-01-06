import httpStatus from 'http-status';

import { TQueryObj } from './blogs.interface';
import CatchAsync from '../../utils/catchAsync';
import { BlogsServices } from './blogs.services';
import sendResponds from '../../utils/sendResponds';

const getAllBlogs = CatchAsync(async (req, res) => {
  const query = req?.query;
  const data = await BlogsServices.getAllBlogService(query as TQueryObj);

  const totalDoc = data.length;

  const meta = {
    page: query.page,
    limit: query.limit,
    total: totalDoc,
  };

  res.status(200).json({
    success: true,
    statusCode: httpStatus.OK,
    message: 'Blogs are retrived succesfully.',
    meta,
    data,
  });
});
const getSingleBlog = CatchAsync(async (req, res) => {
  const id = req.params.id;

  const data = await BlogsServices.getSingleBlogService(id);
  sendResponds(res, {
    success: true,
    statusCode: 200,
    message: 'Blog retrieved successfully',
    data,
  });
});

// const getCourseReviewsById: RequestHandler = async (req, res, next) => {
//   const courseId = req.params.courseId;

//   try {
//     const data = await CoursesServices.getCourseReviewsByIdService(courseId);

//     sendResponds(res, {
//       statusCode: httpStatus.OK,
//       success: true,
//       message: 'Courses reviews are retrived succesfully.',
//       data,
//     });
//   } catch (error) {
//     next(error);
//   }
// };

// const updateCourseDataIntoDB: RequestHandler = async (req, res, next) => {
//   const courseId = req.params.courseId;

//   const { startDate, endDate } = req.body.course;
//   if (startDate && endDate) {
//     const durationInWeeks = getDurationInWeeks(startDate, endDate);
//     req.body.course['durationInWeeks'] = durationInWeeks;
//   }
//   const updatedCourseData = req.body.course;
//   try {
//     const data = await CoursesServices.updateCourseDataIntoDBService(
//       courseId,
//       updatedCourseData,
//     );
//     sendResponds(res, {
//       success: true,
//       statusCode: 201,
//       message: 'Course Updated Succesfully',
//       data,
//     });
//   } catch (error) {
//     next(error);
//   }
// };

export const BlogsControllers = {
  getAllBlogs,
  getSingleBlog,
};
