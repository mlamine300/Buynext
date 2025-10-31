import { Router } from "express";
import {
  createProduct,
  updateProduct,
  deleteProduct,
  getProducts,
  getProductById,
} from "../controllers/product.controller.js";
import { checkAdmin } from "../middleware/middleware.js";

const router = Router();

// CRUD routes for products
router.post("/", checkAdmin, createProduct);
router.put("/:id", checkAdmin, updateProduct);
router.delete("/:id", checkAdmin, deleteProduct);
router.get("/", getProducts);
router.get("/:id", getProductById);

export default router;
