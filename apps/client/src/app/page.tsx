import Image from "next/image";
import featured from "../../public/featured.png";
import ProductList from "@/components/home/ProductList";
import CategoryBar from "@/components/home/CategoryBar";
import SortBy from "@/components/home/SortBy";

export default function Home() {
  return (
    <div className="flex flex-col gap-5">
      <div className="relative aspect-[3/1] mb-12">
        <Image src={featured} fill alt="cover" />
      </div>
      <CategoryBar />
      <SortBy />
      <ProductList />
    </div>
  );
}
