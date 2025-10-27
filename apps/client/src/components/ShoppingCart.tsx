"use client";
import { useCartStore } from "@/stores/cartStore";
import Link from "next/link";
import React from "react";
import { HiOutlineShoppingCart } from "react-icons/hi2";

const ShoppingCart = () => {
  const itemsNumber = useCartStore((state) => state.products.length);
  return (
    <Link href={"/cart"} className=" relative  hover:cursor-pointer">
      <HiOutlineShoppingCart className="text-xl hover:text-primary" />
      <p className="flex justify-center items-center absolute -top-3 left-3 text-sm rounded-full bg-primary w-4 h-4">
        {itemsNumber}{" "}
      </p>
    </Link>
  );
};

export default ShoppingCart;
