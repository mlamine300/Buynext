/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import React, { useEffect } from "react";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { luhnCheck } from "@/lib/utils";
import { useForm } from "react-hook-form";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import klarna from "../../../public/klarna.png";
import cards from "../../../public/cards.png";
import stripe from "../../../public/stripe.png";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { useCartStore } from "@/stores/cartStore";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";

/********
 



*/

const nameRegex = /^[A-Za-zÀ-ÖØ-öø-ÿ' -]{2,50}$/;
const cardNumberRegex = /^(?:\d[ -]*?){13,19}$/;
const experationDateRegex = /^(0[1-9]|1[0-2])\/?([0-9]{2}(?:[0-9]{2})?)$/;
const paymentSchema = z.object({
  nameOnCard: z
    .string()
    .regex(
      nameRegex,
      "Name can only contain letters, spaces, apostrophes, and hyphens"
    ),
  cardNumber: z
    .string()
    .regex(cardNumberRegex, "Invalid card number format")
    .refine((val) => luhnCheck(val), "Invalid card number"),
  experationDate: z
    .string()
    .regex(experationDateRegex, "Invalid format — use MM/YY or MM/YYYY"),
});

const paiementFeilds = [
  {
    name: "nameOnCard",
    label: "Name on card",
    type: "text",
    placeholder: "John Doe",
  },
  {
    name: "cardNumber",
    label: "Card Number",
    type: "text",
    placeholder: "1234 4678 0012 3456",
  },
  {
    name: "experationDate",
    label: "Experation Date",
    type: "text",
    placeholder: "MM/YY",
  },
];
const PaymentInfo = () => {
  const addPaymentInfo = useCartStore((state) => state.addPaymentInfo);
  const cart = useCartStore((state) => state);
  const reset = useCartStore((state) => state.resetCart);
  const router = useRouter();
  useEffect(() => {
    console.log(cart);
  }, [cart]);
  const handlePayment = (data: z.infer<typeof paymentSchema>) => {
    addPaymentInfo(data.nameOnCard, data.cardNumber, data.experationDate);
    toast.success(`order confirmed `);
    console.log(cart);
    reset();
    router.replace("/");
  };
  const form = useForm<z.infer<typeof paymentSchema>>({
    resolver: zodResolver(paymentSchema),
  });
  return (
    <div className="card w-full lg:w-[500px] p-10">
      <h3>Payment Method</h3>
      <Form {...form}>
        <form
          className="flex flex-col gap-4 mt-8"
          id="payment_form"
          onSubmit={form.handleSubmit(handlePayment)}
        >
          {paiementFeilds.map((field) => (
            <FormField
              key={field.name}
              control={form.control}
              name={field.name as any}
              render={({ field: rhfField }) => (
                <FormItem>
                  <FormLabel>{field.label}</FormLabel>
                  <FormControl>
                    <Input
                      type={field.type}
                      placeholder={field.placeholder}
                      {...rhfField}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          ))}
          <div className="flex gap-2 px-2">
            <Image
              src={klarna}
              alt="klarna"
              width={50}
              height={10}
              className=" rounded"
            />
            <Image
              src={cards}
              alt="visa card"
              width={50}
              height={10}
              className=" rounded"
            />
            <Image
              src={stripe}
              alt="stripe"
              width={50}
              height={10}
              className=" rounded"
            />
          </div>
          <Button
            type="submit"
            className="w-full bg-text-primary hover:bg-text-primary/50"
          >
            Continue&rarr;
          </Button>
        </form>
      </Form>
    </div>
  );
};

export default PaymentInfo;
