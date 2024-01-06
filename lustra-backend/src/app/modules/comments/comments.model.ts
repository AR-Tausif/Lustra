import { Schema, model } from 'mongoose';
import { TComment } from './comments.interface';

const commentSchema = new Schema<TComment>(
  {
    commentedBy: {
      type: Schema.Types.ObjectId,
      required: [true, 'userId field required'],
      ref: 'User',
    },
    blogId: {
      type: Schema.Types.ObjectId,
      required: [true, 'Blog id field required'],
      ref: 'Blog',
    },
    text: {
      type: String,
      required: [true, 'Comment text is needed if you want to create comment'],
    },
    reaction: {
      type: Number,
      default: 0,
    },
  },
  { timestamps: true },
);

const Comment = model<TComment>('Comment', commentSchema);

export default Comment;
