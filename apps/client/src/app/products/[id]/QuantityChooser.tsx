"use client";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import React, { useEffect, useState } from "react";

const QuantityChooser = () => {
  const [quantity, setQuantity] = useState(1);
  const { replace } = useRouter();
  const searchParams = useSearchParams();
  const pathname = usePathname();

  useEffect(() => {
    const params = new URLSearchParams(searchParams);
    params.set("quantity", quantity + "");
    replace(`${pathname}?${params.toString()}`);
    console.log(params.toString());
  }, [quantity, searchParams, pathname, replace]);
  return (
    <div className="flex flex-col gap-1">
      <p className="text-text-muted text-xs">Quantity</p>
      <div className="flex gap-1 items-center">
        <button
          disabled={quantity < 2}
          onClick={() => setQuantity((q) => q - 1)}
          className={`text-xl border-[1px] w-7 h-7 flex justify-center items-center 
                 
                `}
        >
          -
        </button>
        <p className="font-semibold text-sm mx-2">{quantity}</p>
        <button
          onClick={() => setQuantity((q) => q + 1)}
          className={`text-xl  border-[1px] w-7 h-7 flex justify-center items-center hover: 
                 
                `}
        >
          +
        </button>
      </div>
    </div>
  );
};

export default QuantityChooser;
