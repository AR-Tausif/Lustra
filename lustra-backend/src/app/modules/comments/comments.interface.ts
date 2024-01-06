import { Types } from 'mongoose';

export type TComment = {
  commentedBy: Types.ObjectId; //usrId
  blogId: Types.ObjectId;
  text: string;
  reaction: number;
};
