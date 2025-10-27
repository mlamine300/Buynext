import express, { Request, Response } from "express";
import cors from "cors";
import { clerkClient, clerkMiddleware, getAuth } from "@clerk/express";
import "dotenv/config";
import { checkAuth } from "./middleware/middleware.js";
const app = express();
app.get("/", (req: Request, res: Response) => {
  return res.json({ message: "a response from product service2" });
});

app.use(clerkMiddleware());

app.get("/test", checkAuth, (req: Request, res: Response) => {
  return res.json({ message: "User is authenticated", userId: req.userId });
});
app.use(
  cors({
    origin: ["http://localhost:3000", "http://localhost:3001"],
    credentials: true,
  })
);

app.listen(8000, () => {
  console.log("product service is running on port 8000");
});
