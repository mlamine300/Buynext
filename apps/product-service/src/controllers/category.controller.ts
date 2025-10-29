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
    // Update category logic here const { id } = req.params;
    const { id } = req.params;
    if (!id || !Number(id)) {
      res.status(400).json({
        success: false,
        message: "Bad Request, id is required to update category",
      });
      return;
    }
    const product = await prisma.product.findUnique({
      where: {
        id: Number(id),
      },
    });
    if (!product) {
      res.status(404).json({
        success: false,
        message: "category Not Found",
      });
      return;
    }
    const data: Prisma.CategoryUpdateInput = req.body;
    if (!data) {
      res.status(400).json({
        success: false,
        message: "Bad Request, please provide data to update",
      });
      return;
    }
    await prisma.category.update({
      where: {
        id: Number(id),
      },
      data,
    });
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
    const { id } = req.params;
    if (!id || !Number(id)) {
      res.status(400).json({
        success: false,
        message: "Bad Request, id is required to delete category",
      });
      return;
    }
    const product = await prisma.product.findUnique({
      where: {
        id: Number(id),
      },
    });
    if (!product) {
      res.status(404).json({
        success: false,
        message: "category Not Found",
      });
      return;
    }
    await prisma.category.delete({
      where: {
        id: Number(id),
      },
    });

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
    const categories = await prisma.category.findMany();
    res.status(200).json({ data: categories });
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
    const { id } = req.params;
    if (!id) {
      res.status(401).json({ message: "please provide id" });
      return;
    }

    const category = await prisma.category.findUnique({
      where: {
        id: Number(id),
      },
    });
    if (!category) {
      res.status(404).json({
        success: false,
        message: "category Not Found",
      });
      return;
    }
    res.status(200).json({ data: { category } });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Failed to fetch category" });
  }
};
