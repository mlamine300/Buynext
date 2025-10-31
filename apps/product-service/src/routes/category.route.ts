import { Router } from "express";
import {
  createCategory,
  updateCategory,
  deleteCategory,
  getCategorys,
  getCategoryById,
} from "../controllers/category.controller.js";
import { checkAdmin } from "../middleware/middleware.js";

const router = Router();

// CRUD routes for categorys
router.post("/", checkAdmin, createCategory);
router.put("/:id", checkAdmin, updateCategory);
router.delete("/:id", checkAdmin, deleteCategory);
router.get("/", getCategorys);
router.get("/:id", getCategoryById);

export default router;
