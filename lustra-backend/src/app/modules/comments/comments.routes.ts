import { Router } from 'express';
import { CommentControllers } from './comments.controllers';
import zodValidation from '../../middlewares/validations/zodValidations';
import { CommentZodValidationSchema } from './comments.validation.zod';

const router = Router();
router.post(
  '/',
  zodValidation(CommentZodValidationSchema.CommentSchema),
  CommentControllers.createComment,
);

export const CommentsRoute = router;
