import { Product } from "../../../../../types";

import Image from "next/image";

import { PriceTag } from "@/components/ui/PriceTag";
import { Button } from "@/components/ui/button";
import { HiOutlineShoppingCart } from "react-icons/hi2";
import klarna from "../../../../public/klarna.png";
import cards from "../../../../public/cards.png";
import stripe from "../../../../public/stripe.png";
import Link from "next/link";
import SizeChooser from "./SizeChooser";
import ColorChooser from "./ColorChooser";
import QuantityChooser from "./QuantityChooser";
import AddToCartProduct from "./AddToCartProduct";

const products: Product[] = [
  {
    id: 1,
    name: "Adidas CoreFit T-Shirt",
    shortDescription: "Breathable cotton tee perfect for gym or casual wear.",
    description:
      "This Adidas CoreFit T-Shirt combines comfort, stretch, and breathability. Ideal for workouts or relaxed days out.",
    price: { original: 49.9, current: 39.9 },
    sizes: ["s", "m", "l", "xl", "xxl"],
    colors: ["gray", "green", "purple"],
    images: {
      gray: "/products/1g.png",
      green: "/products/1gr.png",
      purple: "/products/1p.png",
    },
    category: "t-shirts",
    rating: 4.6,
    inStock: true,
    datePublished: "2025-09-18",
  },
  {
    id: 2,
    name: "Puma Ultra Warm Zip",
    shortDescription: "Lightweight zip jacket for cooler days.",
    description:
      "Stay warm without overheating in the Puma Ultra Warm Zip. Soft fleece interior with a durable, stylish exterior.",
    price: { original: 69.9, current: 59.9 },
    sizes: ["s", "m", "l", "xl", "xxl"],
    colors: ["gray", "green"],
    images: {
      gray: "/products/2g.png",
      green: "/products/2gr.png",
    },
    category: "jackets",
    rating: 4.8,
    inStock: true,
    datePublished: "2025-09-22",
  },
  {
    id: 3,
    name: "Nike Breeze Hoodie",
    shortDescription: "Soft fleece hoodie for comfort and warmth.",
    description:
      "Nike Breeze Hoodie features a premium fleece blend with moisture-wicking technology — perfect for gym and streetwear.",
    price: { original: 79.9, current: 64.9 },
    sizes: ["s", "m", "l", "xl"],
    colors: ["black", "blue", "gray"],
    images: {
      black: "/products/3b.png",
      blue: "/products/3bl.png",
      gray: "/products/3gr.png",
    },
    category: "jackets",
    rating: 4.7,
    inStock: false,
    datePublished: "2025-09-27",
  },
  {
    id: 4,
    name: "Reebok Pulse Tank",
    shortDescription: "Lightweight sleeveless top for workouts.",
    description:
      "Reebok Pulse Tank is built from breathable mesh fabric to keep you cool during intense training sessions.",
    price: { original: 39.9, current: 34.9 },
    sizes: ["s", "m", "l"],
    colors: ["pink", "white"],
    images: {
      pink: "/products/4p.png",
      white: "/products/4w.png",
    },
    category: "t-shirts",
    rating: 4.4,
    inStock: true,
    datePublished: "2025-09-29",
  },
  {
    id: 5,
    name: "Under Armour Velocity Jacket",
    shortDescription: "High-performance jacket designed for motion.",
    description:
      "Under Armour’s Velocity Jacket keeps you protected from wind and rain while maintaining maximum flexibility.",
    price: { original: 99.9, current: 89.9 },
    sizes: ["m", "l", "xl", "xxl"],
    colors: ["blue", "orange", "red"],
    images: {
      blue: "/products/5bl.png",
      orange: "/products/5o.png",
      red: "/products/5r.png",
    },
    category: "jackets",
    rating: 4.9,
    inStock: true,
    datePublished: "2025-10-01",
  },
  {
    id: 6,
    name: "Columbia Active Tee",
    shortDescription: "Moisture-wicking tee for outdoor performance.",
    description:
      "Columbia Active Tee offers quick-dry tech with lightweight comfort — great for hiking, training, or casual use.",
    price: { original: 49.9, current: 44.9 },
    sizes: ["s", "m", "l"],
    colors: ["green", "white"],
    images: {
      green: "/products/6g.png",
      white: "/products/6w.png",
    },
    category: "shoes",
    rating: 4.3,
    inStock: true,
    datePublished: "2025-10-03",
  },
  {
    id: 7,
    name: "North Face Trail Fleece",
    shortDescription: "Durable fleece jacket for all-weather comfort.",
    description:
      "The North Face Trail Fleece combines insulation and breathability, ideal for hikes or cool-weather casual wear.",
    price: { original: 84.9, current: 74.9 },
    sizes: ["m", "l", "xl"],
    colors: ["green", "purple"],
    images: {
      green: "/products/7g.png",
      purple: "/products/7p.png",
    },
    category: "shoes",
    rating: 4.5,
    inStock: true,
    datePublished: "2025-10-06",
  },
  {
    id: 8,
    name: "New Balance Thermal Hoodie",
    shortDescription: "Thermal hoodie built for cold-weather workouts.",
    description:
      "New Balance Thermal Hoodie locks in warmth while allowing freedom of movement — your perfect training companion.",
    price: { original: 89.9, current: 79.9 },
    sizes: ["s", "m", "l", "xl"],
    colors: ["black", "gray"],
    images: {
      black: "/products/8b.png",
      gray: "/products/8gr.png",
    },
    category: "jackets",
    rating: 4.8,
    inStock: false,
    datePublished: "2025-10-10",
  },
];
export const generateMetadata = async ({
  params,
}: {
  params: { id: string };
}) => {
  const product = products.filter((p) => params.id + "" === params.id).at(0);
  if (product) return { title: product.name, description: product.description };
};
const Page = async ({
  params,
  searchParams,
}: {
  params: Promise<{ id: string }>;
  searchParams: Promise<{ color: string; size: string }>;
}) => {
  const id = (await params).id;

  const product = products.filter((p) => p.id === Number(id)).at(0);

  const { color } = await searchParams;
  if (!product) return;
  const x = Object.keys(product.images).at(0) || "";
  const image = product.images[color] || product.images[x] || "";
  console.log(image);

  return (
    <div className="flex flex-col lg:flex-row gap-8">
      <Image
        src={image}
        alt={product?.name || ""}
        width={300}
        height={600}
        className="w-full max-w-svw lg:w-5/12"
      />
      <div className="flex flex-col flex-grow gap-4">
        <h3 className="text-xl font-semibold">{product.name} </h3>
        <p className="text-xs text-text-muted">{product.description} </p>
        <PriceTag price={product.price.current} textSize="xl" />
        <SizeChooser product={product} />

        <ColorChooser product={product} />
        <QuantityChooser />
        <AddToCartProduct product={product} />
        <Button variant={"outline"}>
          <HiOutlineShoppingCart />
          Buy this Item
        </Button>
        <div className="flex gap-2 px-2">
          <Image
            src={klarna}
            alt="klarna"
            width={50}
            height={10}
            className=" rounded"
          />
          <Image
            src={cards}
            alt="visa card"
            width={50}
            height={10}
            className=" rounded"
          />
          <Image
            src={stripe}
            alt="stripe"
            width={50}
            height={10}
            className=" rounded"
          />
        </div>
        <p className="text-text-muted text-xs">
          By clicking Pay Now, you agree to our
          <Link className="underline cursor-pointer" href={"/term"}>
            {" "}
            Terms & Conditions{" "}
          </Link>
          and{" "}
          <Link className="underline cursor-pointer" href={"/policy"}>
            {" "}
            Privacy Policy.{" "}
          </Link>{" "}
          You autorize us to charge your selected payment method for the total
          amount shown. All sales are subject to our return and{" "}
          <Link className="underline cursor-pointer" href={"/refund"}>
            {" "}
            Refund Policies .{" "}
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Page;
