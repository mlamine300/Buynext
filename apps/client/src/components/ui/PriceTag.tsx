import * as React from "react";

import { Badge } from "@/components/ui/badge";
import { twMerge } from "tailwind-merge";

interface PriceTagProps {
  price: number;
  currency?: string; // default: USD
  originalPrice?: number; // for showing discount
  className?: string;
  textSize?: "xs" | "sm" | "lg" | "xl" | "2xl" | "3xl";
  textClassName?: string;
}

export const PriceTag: React.FC<PriceTagProps> = ({
  price,
  currency = "$",
  originalPrice,
  className,
  textSize,
  textClassName,
}) => {
  const isDiscounted = originalPrice && originalPrice > price;
  const discountPercent = isDiscounted
    ? Math.round(((originalPrice - price) / originalPrice) * 100)
    : 0;

  return (
    <div className={twMerge("flex flex-col items-baseline ", className)}>
      <div className=" flex items-center gap-2">
        {isDiscounted && (
          <>
            <span className="text-muted-foreground line-through text-xs">
              {currency}
              {originalPrice?.toFixed(2)}
            </span>
            <Badge variant="secondary" className="text-xs font-medium">
              -{discountPercent}%
            </Badge>
          </>
        )}
      </div>
      {/* Current Price */}
      <span
        className={twMerge(
          `font-semibold text-text-primary text-${textSize || "lg"}`,
          textClassName
        )}
      >
        {price < 0 && "-"}
        {currency}
        {Math.abs(price).toFixed(2)}
      </span>
    </div>
  );
};
