import "dotenv/config";
import { serve } from "@hono/node-server";
import { Hono } from "hono";
import { clerkMiddleware, getAuth } from "@hono/clerk-auth";
import sessionRouter from "./routes/session.route.js";
import { cors } from "hono/cors";
const app = new Hono();

app.use("*", clerkMiddleware());
app.use(
  "*",
  cors({
    origin: ["http://localhost:3000", "http://localhost:3002"],
  })
);
app.route("/sessions", sessionRouter);
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
