import { DataTable } from "@/components/data-table";
import React from "react";
import { ProductType } from "@repo/types";
import { columns } from "@/components/products/productsColumns";

async function getData(): Promise<
  (ProductType & { rating: number; inStock: boolean })[]
> {
  // Fetch data from your API here.
  return [
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
      createdAt: new Date("2025-09-18"),
      updatedAt: new Date("2025-09-20"),
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
      createdAt: new Date("2025-09-17"),
      updatedAt: new Date("2025-09-25"),
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
      createdAt: new Date("2025-09-14"),
      updatedAt: new Date("2025-09-21"),
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
      createdAt: new Date("2025-10-23"),
      updatedAt: new Date("2025-10-31"),
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
      createdAt: new Date("2025-10-02"),
      updatedAt: new Date("2025-10-05"),
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
      createdAt: new Date("2025-10-02"),
      updatedAt: new Date("2025-10-05"),
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
      updatedAt: new Date("2025-10-15"),
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
      createdAt: new Date("2025-10-22"),
      updatedAt: new Date("2025-10-25"),
    },
  ];
}
const page = async () => {
  const data = await getData();
  return (
    <div className="flex flex-col gap-5">
      <h3 className="px-4 text-xl font-semibold bg-muted-foreground/50 p-1 rounded">
        All Payments
      </h3>
      <DataTable columns={columns} data={data} />
    </div>
  );
};

export default page;
