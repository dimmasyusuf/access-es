import authConfig from './auth.config';
import NextAuth from 'next-auth';
const { auth: middleware } = NextAuth(authConfig);

import { privateRoutes, authRoutes, apiAuthPrefix } from './routes';

export default middleware((req) => {
  const { nextUrl } = req;
  const isAuthenticated = !!req.auth;

  const isPrivateRoute = privateRoutes.includes(nextUrl.pathname);
  const isAuthRoute = authRoutes.includes(nextUrl.pathname);
  const isApiAuthRoute = nextUrl.pathname.startsWith(apiAuthPrefix);

  if (isApiAuthRoute) return null;

  if (isAuthRoute)
    return isAuthenticated ? Response.redirect(new URL('/', nextUrl)) : null;

  if (isPrivateRoute && !isAuthenticated)
    return Response.redirect(new URL('/login', nextUrl));

  return null;
});

export const config = {
  matcher: ['/((?!.+\\.[\\w]+$|_next).*)', '/', '/(api|trpc)(.*)'],
};
