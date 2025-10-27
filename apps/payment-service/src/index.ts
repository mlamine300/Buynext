import "dotenv/config";
import { serve } from "@hono/node-server";
import { Hono } from "hono";
import { clerkMiddleware, getAuth } from "@hono/clerk-auth";
import { checkAuth } from "./middleware/middleware.js";
const app = new Hono();

app.get("/", (c) => {
  return c.text("Payment endpoint works!");
});

app.use("*", clerkMiddleware());

app.get("/test", checkAuth, (c) => {
  return c.json({
    message: "You are logged in! Hono",
    userId: c.get("userId"),
  });
});
const start = async () => {
  try {
    serve(
      {
        fetch: app.fetch,
        port: 8002,
      },
      (info) => {
        console.log(`Server is running on http://localhost:${info.port}`);
      }
    );
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
};
start();
