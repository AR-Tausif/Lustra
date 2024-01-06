import mongoose, { Schema } from 'mongoose';
import { TUser } from './user.interface';

const createUserSchema = new Schema<TUser>(
  {
    email: {
      type: String,
      required: true,
      unique: true,
    },
    username: {
      type: String,
      select: 0,
      unique: true,
      required: true,
    },
    password: {
      type: String,
      select: 0,
      required: true,
    },
    profile_picture: {
      type: String,
      default: 'https://i.ibb.co/GC2y2js/image.png',
    },
    bio: {
      type: String,
    },
  },
  {
    timestamps: true,
  },
);

const User = mongoose.model('User', createUserSchema);

// createUserSchema.pre('save', async function (next) {
//   // eslint-disable-next-line @typescript-eslint/no-this-alias
//   const user = this;

//   if (user.isModified('password')) {
//     user.password = await bcrypt.hash(
//       user.password,
//       config.becrypt_salt_round as string,
//     );
//   }

//   next();
// });
export default User;
