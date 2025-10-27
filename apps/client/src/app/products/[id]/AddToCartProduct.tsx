"use client";
import { Button } from "@/components/ui/button";
import React from "react";
import { Product, SelectedProduct } from "../../../../../types";
import { useCartStore } from "@/stores/cartStore";
import { useRouter, useSearchParams } from "next/navigation";

const AddToCartProduct = ({ product }: { product: Product }) => {
  const addProduct = useCartStore((state) => state.addProduct);
  const searchParams = useSearchParams();
  const { replace } = useRouter();
  const chosenColor =
    searchParams.get("color") || Object.keys(product.images).at(0) || "";
  const chosenSize =
    searchParams.get("size") || Object.keys(product.sizes).at(0) || "";
  const quantity = Number(searchParams.get("quantity")) || 1;

  const selectedProduct: SelectedProduct = {
    ...product,
    chosenColor,
    chosenSize,
    orderId: product.id + "/" + chosenSize + "/" + chosenColor,
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
