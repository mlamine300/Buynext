// export interface Product {
//   id: number;
//   name: string;
//   shortDescription: string;
//   description: string;
//   price: number;
//   sizes: string[];
//   colors: string[];
//   images: Record<string, string>;
//   category: string;
//   datePublished: string;
// }
export interface Category {
  name: string;
  icon: any;
  slug: string;
}

// ---- Product Type ----
export interface Product {
  id: number;
  name: string;
  shortDescription: string;
  description: string;
  price: {
    original: number;
    current: number;
  };
  sizes: string[];
  colors: string[];
  images: Record<string, string>;
  category: string; // category slug from categories[]
  rating: number; // 1–5
  inStock: boolean;
  datePublished: string; // ISO format: e.g. "2025-10-01"
}
export interface SelectedProduct extends Product {
  chosenColor: string;
  chosenSize: string;
  orderId?: string;
  quantity?: number;
}
