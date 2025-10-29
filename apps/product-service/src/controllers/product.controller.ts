import { Prisma, prisma } from "@repo/db";
import { Request, Response } from "express";
import { object } from "zod";
// import { prisma, Prisma } from "@repo/product_db";
type Product = Prisma.ProductGetPayload<{}>;
export const ProductKeys = [
  "name",
  "shortDescription",
  "description",
  "price",
  "sizes",
  "colors",
  "images",
  "categorySlug",
];
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
    const messingKeys = ProductKeys.filter((key) => !(key in data));
    if (messingKeys.length > 0) {
      res
        .status(400)
        .json({ error: `Missing required fields: ${messingKeys.join(", ")}` });
      return;
    }
    const { colors, images } = data;
    if (!Array.isArray(colors)) {
      res.status(400).json({ error: "Colors must be an array" });
      return;
    }
    if (!(typeof images === "object") || Array.isArray(images)) {
      res.status(400).json({ error: "Images must be an object" });
      return;
    }
    const messingColors = colors.filter((color) => {
      console.log(color);
      return !(color in images);
    });
    console.log(images);
    if (messingColors.length > 0) {
      res.status(400).json({
        error: `Missing images for colors: ${messingColors.join(", ")}`,
      });
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
    const { id } = req.params;
    if (!id || !Number(id)) {
      res.status(400).json({
        success: false,
        message: "Bad Request, id is required to update product",
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
        message: "product Not Found",
      });
      return;
    }
    const data: Prisma.ProductUpdateInput = req.body;
    if (!data) {
      res.status(400).json({
        success: false,
        message: "Bad Request, please provide data to update",
      });
      return;
    }
    const x = await prisma.product.update({
      where: {
        id: Number(id),
      },
      data,
    });
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
    const { id } = req.params;
    if (!id || !Number(id)) {
      res.status(400).json({
        success: false,
        message: "Bad Request, id is required to delete product",
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
        message: "product Not Found",
      });
      return;
    }
    await prisma.product.delete({
      where: {
        id: Number(id),
      },
    });
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

    const { sort, category, search, limit } = req.query;
    const orderBy = (() => {
      switch (sort as string) {
        case "asc":
          return { price: Prisma.SortOrder.asc };
        case "desc":
          return { price: Prisma.SortOrder.desc };
        case "oldest":
          return { createdAt: Prisma.SortOrder.asc };
        case "newest":
          return { createdAt: Prisma.SortOrder.desc };
        default:
          return undefined;
      }
    })();

    const products = await prisma.product.findMany({
      where: {
        ...(category ? { category: { slug: category as string } } : {}),
        name: {
          contains: search as string,
          mode: "insensitive",
        },
      },
      orderBy,
      take: limit ? Number(limit) : undefined,
    });

    res.status(200).json({ data: products });
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
    // Fetch single product by ID logic heret
    const { id } = req.params;
    if (!id) {
      res.status(401).json({ message: "please provide id" });
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
        message: "product Not Found",
      });
      return;
    }
    res.status(200).json({ data: { product } });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Failed to fetch product" });
  }
};
