"use client";
import React, { useEffect, useState } from "react";
import { Product } from "../../../../../types";

import { usePathname, useSearchParams, useRouter } from "next/navigation";
import toast from "react-hot-toast";

const SizeChooser = ({ product }: { product: Product }) => {
  const searchParams = useSearchParams();

  const [selectedSize, setSelectedSize] = useState<string>(
    product.sizes.at(0) || ""
  );

  const { replace } = useRouter();

  const pathname = usePathname();

  useEffect(() => {
    const params = new URLSearchParams(searchParams);
    params.set("size", selectedSize + "");
    replace(`${pathname}?${params.toString()}`);
    console.log(params.toString());
  }, [selectedSize, searchParams, pathname, replace]);
  return (
    <div className="flex flex-col gap-1">
      <p className="text-text-muted text-xs">Size</p>
      <div className="flex gap-1">
        {product.sizes.map((size, index) => (
          <button
            onClick={() => setSelectedSize(size)}
            key={index}
            className={` border-[1px] w-7 h-7 flex justify-center items-center ${
              size === selectedSize
                ? "bg-text-primary text-text-inverse border-text-inverse outline-1  "
                : ""
            }`}
          >
            {size}
          </button>
        ))}
      </div>
    </div>
  );
};

export default SizeChooser;
