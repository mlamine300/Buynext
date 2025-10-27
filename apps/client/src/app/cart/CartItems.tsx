"use client";
import React from "react";
import ProductRow from "./ProductRow";
import Link from "next/link";

import { useCartStore } from "@/stores/cartStore";

const CartItems = () => {
  const products = useCartStore((state) => state.products);
  return (
    <div className="card gap-4 p-5 flex flex-col ">
      <p className="text-sm font-semibold p-5">Cart Items</p>
      {products.length > 0 ? (
        products.map((product, index) => (
          <ProductRow key={index} product={product} />
        ))
      ) : (
        <Link className="font-semibold text-lg py-48 mx-auto" href={"/"}>
          There is no Product to buy comeBack to HomePage.
        </Link>
      )}
    </div>
  );
};

export default CartItems;
