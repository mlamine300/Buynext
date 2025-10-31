import BrowserUsage from "@/components/home/BrowserUsage";
import CardList from "@/components/home/CardList";
import TodoList from "@/components/home/TodoList";
import TotalRevenueChart from "@/components/home/TotalRevenueChart";
import TotalVisitors from "@/components/home/TotalVisitors";
import type { CartItemType, ProductType } from "@repo/types";
import {
  Card,
  CardContent,
  CardDescription,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { Star } from "lucide-react";

// export const popularContent = [
//   {
//     id: 1,
//     title: "JavaScript Tutorial",
//     badge: "Coding",
//     image:
//       "https://images.pexels.com/photos/3861964/pexels-photo-3861964.jpeg?auto=compress&cs=tinysrgb&w=800",
//     count: 4300,
//   },
//   {
//     id: 2,
//     title: "Tech Trends 2025",
//     badge: "Tech",
//     image:
//       "https://images.pexels.com/photos/1714208/pexels-photo-1714208.jpeg?auto=compress&cs=tinysrgb&w=800",
//     count: 3200,
//   },
//   {
//     id: 3,
//     title: "The Future of AI",
//     badge: "AI",
//     image:
//       "https://images.pexels.com/photos/2007647/pexels-photo-2007647.jpeg?auto=compress&cs=tinysrgb&w=800",
//     count: 2400,
//   },
//   {
//     id: 4,
//     title: "React Hooks Explained",
//     badge: "Coding",
//     image:
//       "https://images.pexels.com/photos/943096/pexels-photo-943096.jpeg?auto=compress&cs=tinysrgb&w=800",
//     count: 1500,
//   },
//   {
//     id: 5,
//     title: "Image Generation with AI",
//     badge: "AI",
//     image:
//       "https://images.pexels.com/photos/3094799/pexels-photo-3094799.jpeg?auto=compress&cs=tinysrgb&w=800",
//     count: 1200,
//   },
// ];
export const POPULAR_PRODUCTS: (CartItemType & {
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
    createdAt: new Date("2025-09-18"),
    updatedAt: new Date("2025-09-19"),
    quantity: 1,
    selectedColor: "green",
    selectedSize: "m",
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
    createdAt: new Date("2025-09-18"),
    updatedAt: new Date("2025-09-19"),
    quantity: 1,
    selectedColor: "red",
    selectedSize: "l",
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
    createdAt: new Date("2025-09-18"),
    updatedAt: new Date("2025-09-19"),
    quantity: 1,
    selectedColor: "gray",
    selectedSize: "xl",
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
    createdAt: new Date("2025-09-18"),
    updatedAt: new Date("2025-09-19"),
    quantity: 1,
    selectedColor: "white",
    selectedSize: "l",
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
    createdAt: new Date("2025-09-12"),
    updatedAt: new Date("2025-09-10"),
    quantity: 1,
    selectedColor: "purple",
    selectedSize: "l",
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
    createdAt: new Date("2025-09-12"),
    updatedAt: new Date("2025-09-10"),
    quantity: 1,
    selectedColor: "black",
    selectedSize: "l",
  },
];
export const latestTransactions = [
  {
    id: 1,
    title: "Subscription Renewal",
    badge: "John Doe",
    image:
      "https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=800",
    count: 1400,
  },
  {
    id: 2,
    title: "Payment for Services",
    badge: "Jane Smith",
    image:
      "https://images.pexels.com/photos/4969918/pexels-photo-4969918.jpeg?auto=compress&cs=tinysrgb&w=800",
    count: 2100,
  },
  {
    id: 3,
    title: "Subscription Renewal",
    badge: "Michael Johnson",
    image:
      "https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg?auto=compress&cs=tinysrgb&w=800",
    count: 1300,
  },
  {
    id: 4,
    title: "Payment for Services",
    badge: "Lily Adams",
    image:
      "https://images.pexels.com/photos/712513/pexels-photo-712513.jpeg?auto=compress&cs=tinysrgb&w=800",
    count: 2500,
  },
  {
    id: 5,
    title: "Subscription Renewal",
    badge: "Sam Brown",
    image:
      "https://images.pexels.com/photos/1680175/pexels-photo-1680175.jpeg?auto=compress&cs=tinysrgb&w=800",
    count: 1400,
  },
];
export default function Home() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 2xl:grid-cols-4 gap-4">
      <div className="home-page-card 2xl:col-span-2">
        <TotalRevenueChart />
      </div>
      <div className="home-page-card">
        <CardList
          translate={{
            id: "id",
            title: "title",
            badge: "badge",
            image: "image",
            count: "count",
          }}
          title="Latest Transactions"
          list={latestTransactions}
        />
      </div>
      <div className="home-page-card">
        <BrowserUsage />
      </div>
      <div className="home-page-card">
        <TodoList />
      </div>
      <div className="home-page-card 2xl:col-span-2">
        <TotalVisitors />
      </div>
      <div className="home-page-card">
        <CardList
          title="Popular Products"
          list={POPULAR_PRODUCTS}
          render={(
            item: CartItemType & {
              rating: number;
              inStock: boolean;
            }
          ) => (
            <Card key={item.id} className=" p-2 ">
              <CardContent className=" rounded-lg flex gap-4 items-center py-1 px-2">
                <Image
                  src={(item.images as any)[item.selectedColor] || ""}
                  alt={item.shortDescription}
                  width={500}
                  height={500}
                  className="rounded w-12 h-12 object-cover "
                />
                <div className="flex flex-col gap-2">
                  <CardTitle>{item.name} </CardTitle>
                  <CardDescription>
                    <Badge variant={"secondary"}>{item.shortDescription}</Badge>
                  </CardDescription>
                </div>
                <h3 className="ml-auto flex items-center gap-1">
                  {item.rating}
                  <Star size={15} />
                </h3>
              </CardContent>
            </Card>
          )}
        />
      </div>
    </div>
  );
}
