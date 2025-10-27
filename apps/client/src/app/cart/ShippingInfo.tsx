/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import React from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Form,
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { sanitizePhoneNumber } from "@/lib/utils";
import { useCartStore } from "@/stores/cartStore";

const shippingSchema = z.object({
  name: z
    .string()
    .min(3, "Name must be at least 3 characters.")
    .max(32, "Name must be at most 32 characters."),
  email: z.email(),
  phone: z
    .string()
    .regex(/^\d{10,15}$/, "Phone number must contain 10–15 digits"),
  address: z.string().optional(),
  city: z
    .string()
    .min(3, "city name must be at least 3 characters")
    .max(20, "city name should be at most 20 characters"),
});
export const shippingFields = [
  { name: "name", label: "Full Name", type: "text", placeholder: "John Doe" },
  {
    name: "email",
    label: "Email",
    type: "email",
    placeholder: "you@example.com",
  },
  {
    name: "phone",
    label: "Phone Number",
    type: "tel",
    placeholder: "0123 45 67 89",
  },
  {
    name: "address",
    label: "Address",
    type: "text",
    placeholder: "center park avenue 1800 ",
  },
  {
    name: "city",
    label: "City",
    type: "text",
    placeholder: "New York ",
  },
] as const;

const ShippingInfo = () => {
  const addShippingInfo = useCartStore((state) => state.addShippmentDetail);
  const next = useCartStore((state) => state.next);
  function handleShipping(data: z.infer<typeof shippingSchema>) {
    addShippingInfo(
      data.name,
      data.email,
      data.phone,
      data.address || "",
      data.city
    );
    next();
  }
  const form = useForm<z.infer<typeof shippingSchema>>({
    resolver: zodResolver(shippingSchema),
  });
  return (
    <div className="card w-full lg:w-[600px] p-10">
      <h3 className="text-lg font-semibold">Shipping Address</h3>
      <Form {...form}>
        <form
          id="shipping_form"
          className="flex flex-col gap-4 mt-8"
          onSubmit={form.handleSubmit(handleShipping)}
        >
          {shippingFields.map((field) => (
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
                      onChange={(e) => {
                        if (field.type === "tel") {
                          rhfField.onChange(
                            sanitizePhoneNumber(e.target.value)
                          );
                        } else {
                          rhfField.onChange(e);
                        }
                      }}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          ))}
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

export default ShippingInfo;
