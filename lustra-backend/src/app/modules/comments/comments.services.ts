import Blog from '../blogPost/blogPost.model';
import { TComment } from './comments.interface';
import Comment from './comments.model';

const createCommentService = async (payload: TComment) => {
  const existUser = await Blog.findById(payload.blogId);
  if (!existUser) {
    throw new Error('Blog post is not available right now!');
  }
  const result = await Comment.create(payload);
  return result;
};

export const CommentServices = {
  createCommentService,
};
