import User from '../user/user.model';
import { TBlog } from './blogPost.interface';

import Blog from './blogPost.model';

const createBlogPoseService = async (payload: TBlog) => {
  const existUser = await User.findById(payload.author);
  if (!existUser) {
    throw new Error('Oppps, user is not exist on database.');
  }
  const result = await Blog.create(payload);
  return result;
};

export const BlogPostServices = {
  createBlogPoseService,
};
