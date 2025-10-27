"use client";
import React from "react";
import {
  ShoppingBasket,
  Shirt,
  Footprints,
  Glasses,
  ShoppingBag,
  ShirtIcon, // Fallback for jackets (Lucide has no jacket icon)
  Hand,
} from "lucide-react";
import { FaFemale } from "react-icons/fa";
import { useRouter, useSearchParams } from "next/navigation";

const categories = [
  {
    name: "All",
    icon: <ShoppingBasket className="w-4 h-4" />,
    slug: "all",
  },
  {
    name: "T-shirts",
    icon: <Shirt className="w-4 h-4" />,
    slug: "t-shirts",
  },
  {
    name: "Shoes",
    icon: <Footprints className="w-4 h-4" />,
    slug: "shoes",
  },
  {
    name: "Accessories",
    icon: <Glasses className="w-4 h-4" />,
    slug: "accessories",
  },
  {
    name: "Bags",
    icon: <ShoppingBag className="w-4 h-4" />,
    slug: "bags",
  },
  {
    name: "Dresses",
    icon: <FaFemale className="w-4 h-4" />,
    slug: "dresses",
  },
  {
    name: "Jackets",
    icon: <ShirtIcon className="w-4 h-4" />, // using shirt icon as substitute
    slug: "jackets",
  },
  {
    name: "Gloves",
    icon: <Hand className="w-4 h-4" />,
    slug: "gloves",
  },
];
const CategoryBar = () => {
  const searchParams = useSearchParams();
  const selected = searchParams.get("category");
  const router = useRouter();
  const handleChoose = (slug: string) => {
    const params = new URLSearchParams(searchParams.toString());
    params.set("category", slug);
    router.push(`/?${params.toString()}`);
  };
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 xl:grid-cols-8 p-2 bg-muted justify-items-center items-center w-full rounded">
      {categories.map((cat, index) => (
        <button
          onClick={() => handleChoose(cat.slug)}
          key={index}
          className={`w-[80%] md:w-32 rounded h-8 flex gap-2 my-auto items-center  cursor-pointer hover:bg-background px-2 ${
            selected === cat.slug ? "bg-background" : ""
          }`}
        >
          {cat.icon}
          <h4 className="text-sm text-text-muted">{cat.name} </h4>
        </button>
      ))}
    </div>
  );
};

export default CategoryBar;
