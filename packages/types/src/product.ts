import type { Product, Category } from "@repo/db";

export type ProductType = Product;
export type CategoryType = Category;
export type StripeProductType = {
  id: string;
  name: string;
  price: number;
};
