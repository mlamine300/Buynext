import { getAuth } from "@hono/clerk-auth";
import { Context } from "hono";
import { createMiddleware } from "hono/factory";
import type { CustomJwtSessionClaims } from "@repo/types";

export const checkAuth = createMiddleware<{ Variables: { userId: string } }>(
  async (c: Context, next: () => any) => {
    const auth = getAuth(c);

    if (!auth?.userId) {
      return c.json({
        message: "You are not logged in. ",
      });
    }
    await next();
  }
);
export const checkAdmin = createMiddleware<{ Variables: { userId: string } }>(
  async (c: Context, next: () => any) => {
    const auth = getAuth(c);

    if (!auth?.userId) {
      return c.json({
        message: "You are not logged in. ",
      });
    }
    const claims = auth.sessionClaims as CustomJwtSessionClaims;
    if (claims.metadata?.role !== "admin") {
      c.status(403);
      return c.json({
        message: "unautorized. ",
      });
    }
    await next();
  }
);
