"use client";
import React from "react";
import CartDetails from "./CartDetails";
import CartItems from "./CartItems";
import ShippingInfo from "./ShippingInfo";
import { z } from "zod";
import PaymentInfo from "./PaymentInfo";
import { useCartStore } from "@/stores/cartStore";
import toast from "react-hot-toast";
// const boughtProducts: SelectedProduct[] = [
//   {
//     id: 1,
//     name: "Adidas CoreFit T-Shirt",
//     shortDescription: "Breathable cotton tee perfect for gym or casual wear.",
//     description:
//       "This Adidas CoreFit T-Shirt combines comfort, stretch, and breathability. Ideal for workouts or relaxed days out.",
//     price: { original: 49.9, current: 39.9 },
//     sizes: ["s", "m", "l", "xl", "xxl"],
//     colors: ["gray", "green", "purple"],
//     images: {
//       gray: "/products/1g.png",
//       green: "/products/1gr.png",
//       purple: "/products/1p.png",
//     },
//     category: "t-shirts",
//     rating: 4.6,
//     inStock: true,
//     datePublished: "2025-09-18",
//     chosenColor: "green",
//     chosenSize: "m",
//   },
//   {
//     id: 5,
//     name: "Under Armour Velocity Jacket",
//     shortDescription: "High-performance jacket designed for motion.",
//     description:
//       "Under Armour’s Velocity Jacket keeps you protected from wind and rain while maintaining maximum flexibility.",
//     price: { original: 99.9, current: 89.9 },
//     sizes: ["m", "l", "xl", "xxl"],
//     colors: ["blue", "orange", "red"],
//     images: {
//       blue: "/products/5bl.png",
//       orange: "/products/5o.png",
//       red: "/products/5r.png",
//     },
//     category: "jackets",
//     rating: 4.9,
//     inStock: true,
//     datePublished: "2025-10-01",
//     chosenColor: "red",
//     chosenSize: "l",
//   },
//   {
//     id: 8,
//     name: "New Balance Thermal Hoodie",
//     shortDescription: "Thermal hoodie built for cold-weather workouts.",
//     description:
//       "New Balance Thermal Hoodie locks in warmth while allowing freedom of movement — your perfect training companion.",
//     price: { original: 89.9, current: 79.9 },
//     sizes: ["s", "m", "l", "xl"],
//     colors: ["black", "gray"],
//     images: {
//       black: "/products/8b.png",
//       gray: "/products/8gr.png",
//     },
//     category: "jackets",
//     rating: 4.8,
//     inStock: false,
//     datePublished: "2025-10-10",
//     chosenColor: "gray",
//     chosenSize: "xl",
//   },
// ];

const Cart = () => {
  const steps = ["Shopping Cart", "Shipping Address", "Payment Method"];
  const selectedStep = useCartStore((state) => state.step);
  const setStep = useCartStore((state) => state.setStep);
  const name = useCartStore((state) => state.name);
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
          <PaymentInfo />
        )}
        <CartDetails />
      </div>
    </div>
  );
};

export default Cart;
