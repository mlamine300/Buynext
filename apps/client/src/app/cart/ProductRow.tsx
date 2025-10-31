"use client";
import Image from "next/image";
import type { CartItemType } from "@repo/types";
import { HiOutlineTrash } from "react-icons/hi2";
import { PriceTag } from "@/components/ui/PriceTag";
import { useCartStore } from "@/stores/cartStore";
import toast from "react-hot-toast";
import { useState } from "react";

const ProductRow = ({
  product,
}: {
  product: CartItemType;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
}) => {
  const setProductQuantity = useCartStore(
    (state) => state.updateProductQuantity
  );
  const [qunatity, setQunatity] = useState(product.quantity);
  const removeProductById = useCartStore((state) => state.removeProduct);
  const handleDeleteProduct = () => {
    removeProductById(product.orderId || "");
    toast.success(`${product.name} has been deleted from cart`);
  };
  const images = product.images as any;
  return (
    <div className="w-full lg:w-[600px] h-40 flex items-center gap-8">
      <Image
        src={images[product.selectedColor] || ""}
        alt={product.name}
        width={200}
        height={200}
        className="object-cover w-36 h-36 bg-text-muted/20"
      />
      <div className="w-full  h-full flex flex-col gap-1 py-2">
        <h4 className="font-semibold text-lg">{product.name} </h4>
        <div className="flex gap-1 items-center">
          <p className="text-xs text-text-muted">Quantity :</p>
          <button
            disabled={(product.quantity || 1) < 2}
            onClick={() => {
              setProductQuantity(
                product.orderId || "",
                product.quantity || 1 - 1
              );
              setQunatity((b) => (b || 1) - 1);
            }}
            className={`text-sm border-[1px] w-7 h-7 flex justify-center items-center 
                 
                `}
          >
            -
          </button>
          <p className="font-semibold text-xs text-text-muted mx-2">
            {qunatity}
          </p>
          <button
            onClick={() => {
              setProductQuantity(
                product.orderId || "",
                product.quantity || 1 + 1
              );
              setQunatity((b) => (b || 1) + 1);
            }}
            className={`text-sm  border-[1px] w-7 h-7 flex justify-center items-center hover: 
                 
                `}
          >
            +
          </button>
        </div>
        <p className="text-text-muted text-sm">{`Size: ${product.selectedSize}`}</p>
        <p className="text-text-muted text-sm">{`Color: ${product.selectedColor}`}</p>
        <PriceTag price={product.price} className="mt-auto mb-0" />
      </div>
      <div className="h-full  flex justify-center items-center">
        <HiOutlineTrash
          onClick={() => handleDeleteProduct()}
          className="w-7 h-7 p-1 text-red-700 rounded-full bg-red-300/50 cursor-pointer hover:bg-red-300"
        />
      </div>
    </div>
  );
};

export default ProductRow;
