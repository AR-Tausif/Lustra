import { Router } from 'express';
import { BlogPostRoutes } from '../modules/blogPost/blogPost.routes';
import { UserRouter } from '../modules/user/user.routes';
import { CommentsRoute } from '../modules/comments/comments.routes';
import { CategoryRoutes } from '../modules/category/category.routes';

import { AuthRouter } from '../modules/auth/auth.router';
import { BlogsRoute } from '../modules/blogs/blogs.routes';

const router = Router();

const modulePatternRoutes = [
  {
    path: '/blog',
    route: BlogPostRoutes,
  },
  {
    path: '/blogs',
    route: BlogsRoute,
  },
  // {
  //   path: '/categories',
  //   route: CategoryRoutes,
  // },
  {
    path: '/comment',
    route: CommentsRoute,
  },
  {
    path: '/user',
    route: UserRouter,
  },
  {
    path: '/auth',
    route: AuthRouter,
  },
];

modulePatternRoutes.forEach((route) => {
  router.use(route.path, route.route);
});

export default router;
