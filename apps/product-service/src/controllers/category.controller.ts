import { prisma, Prisma } from "@repo/db";
import { Request, Response } from "express";

export const createCategory = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const data: Prisma.CategoryCreateInput = req.body;
    const category = await prisma.category.create({ data });

    res
      .status(201)
      .json({ message: "category created successfully", category });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Failed to create category" });
  }
};

export const updateCategory = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    // Update category logic here
    res.status(200).json({ message: "category updated successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Failed to update category" });
  }
};

export const deleteCategory = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    // Delete category logic here
    res.status(200).json({ message: "category deleted successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Failed to delete category" });
  }
};

export const getCategorys = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    // Fetch categorys logic here
    res.status(200).json({ data: [] });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Failed to fetch categorys" });
  }
};

export const getCategoryById = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    // Fetch single category by ID logic here
    res.status(200).json({ data: {} });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Failed to fetch category" });
  }
};
