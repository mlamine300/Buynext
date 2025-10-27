"use client";
import Image from "next/image";
import React, { useState } from "react";
import { Product, SelectedProduct } from "../../../types";

import { SelectList } from "./ui/SelectList";
import ColorOptions from "./ColorOptions";
import { PriceTag } from "./ui/PriceTag";
import { Button } from "./ui/button";
import { HiOutlineShoppingCart } from "react-icons/hi2";
import Link from "next/link";
import { useCartStore } from "@/stores/cartStore";
import toast from "react-hot-toast";

const ProductCard = ({ product }: { product: Product }) => {
  const [color, setColor] = useState<string>(product.colors.at(0) || "");
  const [size, setSize] = useState(product.sizes.at(0) || "m");
  const image = product.images[color] || product.images[0];
  const addProductToCart = useCartStore((state) => state.addProduct);
  const handleAddToCart = () => {
    addProductToCart({
      ...product,
      chosenColor: color,
      chosenSize: size,
      orderId: product.id + "/" + size + "/" + color,
      quantity: 1,
    });
    toast.success(`${product.name} added to cart`);
  };
  return (
    <div className="flex flex-col  bg-muted shadow-lg rounded-sm w-80 sm:w-64  md:w-60 items-center overflow-hidden">
      <Image
        width={180}
        height={320}
        alt={product.name}
        src={image || ""}
        className="w-full"
      />
      <div className="flex flex-col gap-2 p-2 bg-white w-80 sm:w-64  md:w-60">
        <Link
          href={`/products/${product.id}`}
          className="text-text-primary text-sm font-semibold hover:underline"
        >
          {product.name}{" "}
        </Link>
        <p className="text-text-muted text-[10px] text-wrap h-12 truncate">
          {product.description}
        </p>
        <div className="flex gap-2 items-center">
          <div className="flex flex-col gap-1 ">
            <p className="text-[10px] ml-1 text-text-muted">Size </p>
            <SelectList
              list={product.sizes}
              value={size}
              onValueChange={setSize}
              className="w-16"
              size="sm"
            />
          </div>

          <div className="flex flex-col gap-1 ">
            <p className="text-[10px] ml-1 text-text-muted">Color </p>
            <ColorOptions
              color={color}
              colorList={product.colors}
              setColor={setColor}
            />
          </div>
        </div>
        <div className="flex justify-between items-center">
          <PriceTag
            price={product.price.current}
            originalPrice={product.price.original}
          />
          <Button
            onClick={() => handleAddToCart()}
            size={"sm"}
            className="text-xs cursor-pointer"
            variant={"outline"}
          >
            <HiOutlineShoppingCart />
            Add to Cart
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
