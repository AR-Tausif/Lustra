import { RequestHandler } from 'express';
import sendResponds from '../../utils/sendResponds';
import { UserServices } from './user.service';
import httpStatus from 'http-status';
import CatchAsync from '../../utils/catchAsync';

const createUserIntoDB = CatchAsync(async (req, res) => {
  const result = await UserServices.createUserIntoDB(req.body);
  sendResponds(res, {
    success: true,
    message: 'User created succesfully!',
    statusCode: httpStatus.OK,
    data: result,
  });
});
const getUsersFromDB: RequestHandler = async (req, res, next) => {
  try {
    const result = await UserServices.getUsersFromDB();
    sendResponds(res, {
      success: true,
      message: 'User retrieved succesfully!',
      statusCode: httpStatus.OK,
      data: result,
    });
  } catch (error) {
    next(error);
  }
};

export const UserController = {
  getUsersFromDB,
  createUserIntoDB,
};
