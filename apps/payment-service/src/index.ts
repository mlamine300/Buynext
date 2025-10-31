import "dotenv/config";
import { serve } from "@hono/node-server";
import { Hono } from "hono";
import { clerkMiddleware, getAuth } from "@hono/clerk-auth";
import { checkAuth } from "./middleware/middleware.js";
import stripe from "../utils/stripe.js";
const app = new Hono();

app.get("/", (c) => {
  return c.text("Payment endpoint works!");
});

app.use("*", clerkMiddleware());

app.get("/test", async (c) => {
  console.log("starting...");
  const x = await stripe.products.create({
    name: "hola",
    id: "123",
    default_price_data: {
      currency: "dzd",
      unit_amount: 2600 * 100,
    },
  });
  console.log(x);
  return c.json({ message: "product created" });
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
