import { Types } from 'mongoose';

export type TBlog = {
  title: string;
  content: string;
  content_image: string;
  author: Types.ObjectId;
  publication_date: Date;
  tags: string[];
  views: number;
  likes: number;
  comments: Types.ObjectId;
};
