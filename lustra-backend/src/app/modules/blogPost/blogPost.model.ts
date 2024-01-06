import mongoose, { Schema } from 'mongoose';
import { TBlog } from './blogPost.interface';

export const blogPostSchema = new mongoose.Schema<TBlog>({
  title: { type: String, required: true },
  content: { type: String, required: true },
  content_image: { type: String },
  author: { type: Schema.Types.ObjectId, ref: 'User', required: true },
  publication_date: { type: Date, required: true },
  tags: { type: [String], required: true },
  views: { type: Number, default: 0 },
  likes: { type: Number, default: 0 },
});

const Blog = mongoose.model<TBlog>('Blog', blogPostSchema);

export default Blog;
