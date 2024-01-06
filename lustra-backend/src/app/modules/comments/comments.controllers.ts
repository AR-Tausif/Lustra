import CatchAsync from '../../utils/catchAsync';
import sendResponds from '../../utils/sendResponds';
import { CommentServices } from './comments.services';

const createComment = CatchAsync(async (req, res) => {
  const data = await CommentServices.createCommentService(req.body);
  sendResponds(res, {
    success: true,
    statusCode: 200,
    message: 'Comment created succesfully',
    data,
  });
});
export const CommentControllers = {
  createComment,
};
