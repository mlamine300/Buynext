import { getAuth } from "@hono/clerk-auth";
import { Context } from "hono";
import { createMiddleware } from "hono/factory";

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
