"use client";
import { Button } from "@/components/ui/button";
import { PriceTag } from "@/components/ui/PriceTag";
import { useCartStore } from "@/stores/cartStore";
import React from "react";

const CartDetails = () => {
  const products = useCartStore((state) => state.products);
  const step = useCartStore((state) => state.step);
  const total = products.reduce((prev, curr) => {
    return prev + curr.price.current;
  }, 0);
  const next = useCartStore((state) => state.next);
  const discountPercentage = useCartStore((state) => state.discount) || 0;
  const discount = total * Number((-1 * discountPercentage) / 100);
  const shippingFee = useCartStore((state) => state.shippingFee) || 0;
  const totaltopay = total + discount + shippingFee;
  return (
    <div className="w-96 rounded-lg shadow-lg p-10 flex flex-col self-end xl:self-start">
      <h4 className="text-lg font-semibold my-4">Cart Details</h4>
      <div className="w-full flex flex-col gap-3 ">
        <div className="flex justify-between">
          <p className="text-sm text-text-muted">Subtotal</p>
          <PriceTag textSize="sm" price={total} />
        </div>
        <div className="flex justify-between">
          <p className="text-sm text-text-muted">{`Discount (${discountPercentage}%)`}</p>
          <PriceTag
            textClassName="text-red-700"
            textSize="sm"
            price={discount}
          />
        </div>
        <div className="flex justify-between">
          <p className="text-sm text-text-muted">Shipping Fee</p>
          <PriceTag textSize="sm" price={shippingFee} />
        </div>
        <div className="bg-text-muted/50 h-px" />

        <div className="flex justify-between">
          <p className="text-lg font-semibold">Total</p>
          <PriceTag price={totaltopay} />
        </div>
      </div>
      {step == 0 && (
        <Button
          onClick={next}
          className="mt-2 bg-text-primary hover:bg-text-primary/50"
        >
          Continue
        </Button>
      )}
    </div>
  );
};

export default CartDetails;
