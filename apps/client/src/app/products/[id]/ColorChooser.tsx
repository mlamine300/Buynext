"use client";
import React, { useEffect, useState } from "react";
import { Product } from "../../../../../types";

import { usePathname, useRouter, useSearchParams } from "next/navigation";
import toast from "react-hot-toast";

const ColorChooser = ({ product }: { product: Product }) => {
  const { replace } = useRouter();
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const [selectedColor, setSelectedColor] = useState<string>(
    product?.colors.at(0) || ""
  );
  useEffect(() => {
    const params = new URLSearchParams(searchParams);
    params.set("color", selectedColor);
    replace(`${pathname}?${params.toString()}`);
    console.log(params.toString());
  }, [selectedColor, searchParams, pathname, replace]);

  return (
    <div className="flex flex-col gap-1">
      <p className="text-text-muted text-xs">Color</p>
      <div className="flex gap-1">
        {product.colors.map((color, index) => (
          <button
            onClick={() => setSelectedColor(color)}
            key={index}
            style={{ backgroundColor: color, outlineColor: color }}
            className={` border-1 w-7 h-7 flex justify-center items-center ${
              color === selectedColor
                ? " border-2 border-text-inverse outline-2  "
                : ""
            }`}
          ></button>
        ))}
      </div>
    </div>
  );
};

export default ColorChooser;
