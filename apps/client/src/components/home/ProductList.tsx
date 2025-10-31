"use client";
import React from "react";
import ProductCard from "../ProductCard";
import { ProductType } from "@repo/types";
import { useSearchParams } from "next/navigation";
import { compareAsc, compareDesc } from "date-fns";
export const products: (ProductType & {
  rating: number;
  inStock: boolean;
})[] = [
  {
    id: 1,
    name: "Adidas CoreFit T-Shirt",
    shortDescription: "Breathable cotton tee perfect for gym or casual wear.",
    description:
      "This Adidas CoreFit T-Shirt combines comfort, stretch, and breathability. Ideal for workouts or relaxed days out.",
    price: 39.9,
    sizes: ["s", "m", "l", "xl", "xxl"],
    colors: ["gray", "green", "purple"],
    images: {
      gray: "/products/1g.png",
      green: "/products/1gr.png",
      purple: "/products/1p.png",
    },
    categorySlug: "t-shirts",
    rating: 4.6,
    inStock: true,
    createdAt: new Date("2025-10-01"),
    updatedAt: new Date("2025-10-01"),
  },
  {
    id: 2,
    name: "Puma Ultra Warm Zip",
    shortDescription: "Lightweight zip jacket for cooler days.",
    description:
      "Stay warm without overheating in the Puma Ultra Warm Zip. Soft fleece interior with a durable, stylish exterior.",
    price: 59.9,
    sizes: ["s", "m", "l", "xl", "xxl"],
    colors: ["gray", "green"],
    images: {
      gray: "/products/2g.png",
      green: "/products/2gr.png",
    },
    categorySlug: "jackets",
    rating: 4.8,
    inStock: true,
    createdAt: new Date("2025-10-02"),
    updatedAt: new Date("2025-10-02"),
  },
  {
    id: 3,
    name: "Nike Breeze Hoodie",
    shortDescription: "Soft fleece hoodie for comfort and warmth.",
    description:
      "Nike Breeze Hoodie features a premium fleece blend with moisture-wicking technology — perfect for gym and streetwear.",
    price: 64.9,
    sizes: ["s", "m", "l", "xl"],
    colors: ["black", "blue", "gray"],
    images: {
      black: "/products/3b.png",
      blue: "/products/3bl.png",
      gray: "/products/3gr.png",
    },
    categorySlug: "jackets",
    rating: 4.7,
    inStock: false,
    createdAt: new Date("2025-10-04"),
    updatedAt: new Date("2025-10-04"),
  },
  {
    id: 4,
    name: "Reebok Pulse Tank",
    shortDescription: "Lightweight sleeveless top for workouts.",
    description:
      "Reebok Pulse Tank is built from breathable mesh fabric to keep you cool during intense training sessions.",
    price: 34.9,
    sizes: ["s", "m", "l"],
    colors: ["pink", "white"],
    images: {
      pink: "/products/4p.png",
      white: "/products/4w.png",
    },
    categorySlug: "t-shirts",
    rating: 4.4,
    inStock: true,
    createdAt: new Date("2025-10-05"),
    updatedAt: new Date("2025-10-05"),
  },
  {
    id: 5,
    name: "Under Armour Velocity Jacket",
    shortDescription: "High-performance jacket designed for motion.",
    description:
      "Under Armour’s Velocity Jacket keeps you protected from wind and rain while maintaining maximum flexibility.",
    price: 89.9,
    sizes: ["m", "l", "xl", "xxl"],
    colors: ["blue", "orange", "red"],
    images: {
      blue: "/products/5bl.png",
      orange: "/products/5o.png",
      red: "/products/5r.png",
    },
    categorySlug: "jackets",
    rating: 4.9,
    inStock: true,
    createdAt: new Date("2025-10-10"),
    updatedAt: new Date("2025-10-11"),
  },
  {
    id: 6,
    name: "Columbia Active Tee",
    shortDescription: "Moisture-wicking tee for outdoor performance.",
    description:
      "Columbia Active Tee offers quick-dry tech with lightweight comfort — great for hiking, training, or casual use.",
    price: 44.9,
    sizes: ["s", "m", "l"],
    colors: ["green", "white"],
    images: {
      green: "/products/6g.png",
      white: "/products/6w.png",
    },
    categorySlug: "shoes",
    rating: 4.3,
    inStock: true,
    createdAt: new Date("2025-10-16"),
    updatedAt: new Date("2025-10-18"),
  },
  {
    id: 7,
    name: "North Face Trail Fleece",
    shortDescription: "Durable fleece jacket for all-weather comfort.",
    description:
      "The North Face Trail Fleece combines insulation and breathability, ideal for hikes or cool-weather casual wear.",
    price: 74.9,
    sizes: ["m", "l", "xl"],
    colors: ["green", "purple"],
    images: {
      green: "/products/7g.png",
      purple: "/products/7p.png",
    },
    categorySlug: "shoes",
    rating: 4.5,
    inStock: true,
    createdAt: new Date("2025-10-12"),
    updatedAt: new Date("2025-10-13"),
  },
  {
    id: 8,
    name: "New Balance Thermal Hoodie",
    shortDescription: "Thermal hoodie built for cold-weather workouts.",
    description:
      "New Balance Thermal Hoodie locks in warmth while allowing freedom of movement — your perfect training companion.",
    price: 79.9,
    sizes: ["s", "m", "l", "xl"],
    colors: ["black", "gray"],
    images: {
      black: "/products/8b.png",
      gray: "/products/8gr.png",
    },
    categorySlug: "jackets",
    rating: 4.8,
    inStock: false,
    createdAt: new Date("2025-10-15"),
    updatedAt: new Date("2025-10-16"),
  },
];

const ProductList = () => {
  const searchParams = useSearchParams();
  const orderBy = searchParams.get("sort");
  const category = searchParams.get("category");

  const orderProductList = (a: ProductType, b: ProductType) => {
    if (orderBy === "newest")
      return compareDesc(new Date(a.createdAt), new Date(b.createdAt));
    if (orderBy === "oldest")
      return compareAsc(new Date(a.createdAt), new Date(b.createdAt));
    if (orderBy === "chipest") return a.price > b.price ? 1 : -1;
    if (orderBy === "expensive") return a.price < b.price ? 1 : -1;

    return 1;
  };
  const filteredProduct = products
    .filter((p) => {
      if (!category || category === "" || category === "all") return p;
      return p.categorySlug === category;
    })
    .sort((a, b) => orderProductList(a, b));
  return (
    <div className="grid gap-2 justify-items-center grid-col-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 ">
      {filteredProduct.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};

export default ProductList;
