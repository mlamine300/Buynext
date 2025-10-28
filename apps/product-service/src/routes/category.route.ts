import { Router } from "express";
import {
  createCategory,
  updateCategory,
  deleteCategory,
  getCategorys,
  getCategoryById,
} from "../controllers/category.controller.js";

const router = Router();

// CRUD routes for categorys
router.post("/", createCategory);
router.put("/:id", updateCategory);
router.delete("/:id", deleteCategory);
router.get("/", getCategorys);
router.get("/:id", getCategoryById);

export default router;
