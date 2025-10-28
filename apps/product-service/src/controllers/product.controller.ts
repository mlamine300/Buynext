import { Prisma, prisma } from "@repo/db";
import { Request, Response } from "express";
// import { prisma, Prisma } from "@repo/product_db";
type Product = Prisma.ProductGetPayload<{}>;
export const createProduct = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const data: Prisma.ProductCreateInput = req.body;

    if (!data) {
      res.status(400).json({ error: "Invalid product data" });
      return;
    }
    const product = await prisma.product.create({ data });
    // Create a new product logic here

    res.status(201).json({ message: "product created successfully", product });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Failed to create product" });
  }
};

export const updateProduct = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    // Update product logic here
    res.status(200).json({ message: "product updated successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Failed to update product" });
  }
};

export const deleteProduct = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    // Delete product logic here
    res.status(200).json({ message: "product deleted successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Failed to delete product" });
  }
};

export const getProducts = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    // Fetch products logic here
    res.status(200).json({ data: [] });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Failed to fetch products" });
  }
};

export const getProductById = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    // Fetch single product by ID logic here
    res.status(200).json({ data: {} });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Failed to fetch product" });
  }
};
