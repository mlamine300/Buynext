import type { Product } from "@repo/db";
export type CartItemType = Product & {
  quantity: number;
  selectedSize: string;
  selectedColor: string;
  orderId?: string;
};
