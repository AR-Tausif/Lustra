import { Router } from 'express';
import { UserController } from './user.controller';
import zodValidation from '../../middlewares/validations/zodValidations';
import { UserZodValidationSchema } from './user.validation.zod';

const router = Router();
router.post(
  '/create-user',
  zodValidation(UserZodValidationSchema.createUserSchema),
  UserController.createUserIntoDB,
);
router.get('/', UserController.getUsersFromDB);

export const UserRouter = router;
