import {
  clerkMiddleware,
  createRouteMatcher
} from '@clerk/nextjs/server';

const isProtectedRoute = createRouteMatcher([
  '/',
  '/(api)(.*)'
]);

const isPublicRoute = createRouteMatcher([
  '/(api/webhook/clerk)',
  // '/(api/prjects/)(.*)'
]);

export default clerkMiddleware((auth, req) => {
  if (isProtectedRoute(req) && !isPublicRoute(req)) auth().protect();
});


// export const config = {
//   matcher: [
//     // Skip Next.js internals and all static files, unless found in search params
//     '/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)',
//     // Always run for API routes
//     // webhooks should not be protected
//     '/api/webhook/clerk',
//   ],
// };