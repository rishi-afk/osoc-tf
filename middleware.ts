import { authMiddleware, redirectToSignIn } from "@clerk/nextjs";

const ADMINS = ["205122080@nitt.edu"];

export default authMiddleware({
  publicRoutes: ["/", "/events", "/team"],
});

export const config = {
  matcher: ["/((?!.*\\..*|_next).*)", "/", "/(api|trpc)(.*)"],
};
