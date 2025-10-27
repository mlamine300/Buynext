import BrowserUsage from "@/components/home/BrowserUsage";
import CardList from "@/components/home/CardList";
import TodoList from "@/components/home/TodoList";
import TotalRevenueChart from "@/components/home/TotalRevenueChart";
import TotalVisitors from "@/components/home/TotalVisitors";
import { SelectedProduct, type Product } from "../../../types";
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
export const POPULAR_PRODUCTS: SelectedProduct[] = [
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
    chosenColor: "green",
    chosenSize: "m",
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
    chosenColor: "red",
    chosenSize: "l",
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
    chosenColor: "gray",
    chosenSize: "xl",
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
    chosenColor: "white",
    chosenSize: "l",
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
    chosenColor: "purple",
    chosenSize: "l",
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
    chosenColor: "black",
    chosenSize: "l",
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
          render={(item: SelectedProduct) => (
            <Card key={item.id} className=" p-2 ">
              <CardContent className=" rounded-lg flex gap-4 items-center py-1 px-2">
                <Image
                  src={item.images[item.chosenColor] || ""}
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
