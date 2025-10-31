"use client";
import { Button } from "@/components/ui/button";
import React from "react";
import type { ProductType, CartItemType } from "@repo/types";
import { useCartStore } from "@/stores/cartStore";
import { useRouter, useSearchParams } from "next/navigation";

const AddToCartProduct = ({ product }: { product: ProductType }) => {
  const addProduct = useCartStore((state) => state.addProduct);
  const searchParams = useSearchParams();
  const { replace } = useRouter();
  const images = product.images as any;
  const selectedColor =
    searchParams.get("color") || Object.keys(images).at(0) || "";
  const selectedSize =
    searchParams.get("size") || Object.keys(product.sizes).at(0) || "";
  const quantity = Number(searchParams.get("quantity")) || 1;

  const selectedProduct: CartItemType = {
    ...product,
    selectedColor,
    selectedSize,
    orderId: product.id + "/" + selectedSize + "/" + selectedColor,
    quantity,
  };
  const handleAddToCart = () => {
    addProduct(selectedProduct);
    replace("/cart");
  };
  return (
    <Button onClick={handleAddToCart} variant={"black"}>
      +Add to Cart
    </Button>
  );
};

export default AddToCartProduct;
