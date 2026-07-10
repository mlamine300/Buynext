"use client";
import React from "react";
import CartDetails from "./CartDetails";
import CartItems from "./CartItems";
import ShippingInfo from "./ShippingInfo";
import { z } from "zod";
import PaymentInfo from "./PaymentInfo";
import { useCartStore } from "@/stores/cartStore";
import toast from "react-hot-toast";
import StripePaymentForm from "@/components/stripe/StripPaymentComponent";

const Cart = () => {
  const steps = ["Shopping Cart", "Shipping Address", "Payment Method"];
  const selectedStep = useCartStore((state) => state.step);
  const setStep = useCartStore((state) => state.setStep);
  const name = useCartStore((state) => state.name);
  const email = useCartStore((state) => state.email);
  const phone = useCartStore((state) => state.phone);
  const address = useCartStore((state) => state.address);
  const city = useCartStore((state) => state.city);
  const handleNavigation = (step: number) => {
    if (step === 2 && !name) {
      toast.error("please fill shipping information first");
      return;
    }

    setStep(step);
  };

  return (
    <div className="flex flex-col  items-center  pt-10 gap-5 ">
      <h3 className="text-xl font-semibold">Your Shopping Cart</h3>
      <div className="flex flex-col md:flex-row gap-4 md:gap-8">
        {steps.map((step, index) => (
          <div
            onClick={() => handleNavigation(index)}
            key={index}
            className="flex flex-col gap-2 cursor-pointer"
          >
            <div className="flex  items-center gap-4 ">
              <p
                className={`text-lg text-text-inverse  flex items-center
                 justify-center rounded-full w-8 h-8 ${
                   index === selectedStep ? "bg-text-primary " : "bg-text-muted"
                 } `}
              >
                {index + 1}{" "}
              </p>
              <p
                className={` text-sm ${
                  index === selectedStep
                    ? "text-text-primary font-semibold"
                    : "text-text-muted"
                }`}
              >
                {step}{" "}
              </p>
            </div>
            <div
              className={`h-[2px] mx-px  ${
                index === selectedStep ? "bg-text-primary " : "bg-text-muted"
              }`}
            ></div>
          </div>
        ))}
      </div>
      <div className="flex flex-col  xl:flex-row md:justify-around w-full gap-8 ">
        {selectedStep === 0 ? (
          <CartItems />
        ) : selectedStep === 1 ? (
          <ShippingInfo />
        ) : (
          // <PaymentInfo />
          <StripePaymentForm
            shippingForm={{ name, email, phone, address, city }}
          />
        )}
        <CartDetails />
      </div>
    </div>
  );
};

export default Cart;
