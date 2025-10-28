import express, { Request, Response } from "express";
import cors from "cors";
import { clerkMiddleware, getAuth } from "@clerk/express";
import "dotenv/config";
import { checkAuth } from "./middleware/middleware.js";
import ProductRouter from "./routes/product.route.js";
import CategoryRouter from "./routes/category.route.js";
const app = express();
app.use(
  cors({
    origin: ["http://localhost:3000", "http://localhost:3001"],
    credentials: true,
  })
);
app.use(express.json());
app.get("/", (req: Request, res: Response) => {
  return res.json({ message: "a response from product service2" });
});

app.use(clerkMiddleware());

app.get("/test", checkAuth, (req: Request, res: Response) => {
  return res.json({ message: "User is authenticated", userId: req.userId });
});
app.use("/product", ProductRouter);
app.use("/category", CategoryRouter);

app.use((err: any, req: Request, res: Response, next: Function) => {
  console.error(err.stack);
  res
    .status(err.status || 500)
    .json({ error: err.message || "Internal Server Error" });
});
app.listen(8000, () => {
  console.log("product service is running on port 8000");
});
