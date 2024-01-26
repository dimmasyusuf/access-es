/**
 * An array of routes that are accessible to authenticated users.
 * These routes require authentication.
 * @type {string[]}
 */

export const privateRoutes = ['/dashboard', '/profile', '/settings'];

/**
 * An array of routes that are used for authentication.
 * These routes will redirect to home if the user is already authenticated.
 * @type {string[]}
 */

export const authRoutes = ['/login', '/register'];

/**
 * The prefix for API Authenticated routes.
 * Routes that start with this prefix are used for API authentication.
 * @type {string}
 */

export const apiAuthPrefix = '/api/auth';
