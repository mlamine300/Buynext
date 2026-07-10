"use client";

import { loadStripe } from "@stripe/stripe-js";
import { useAuth } from "@clerk/nextjs";
import { useEffect, useState } from "react";
import { CartItemsType, ShippingFormInputs } from "@repo/types";
import { useCartStore } from "@/stores/cartStore";
import CheckoutForm from "../CheckoutForm";
import { Elements } from "@stripe/react-stripe-js";

const stripe = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY || "");

const fetchClientSecret = async (cart: CartItemsType, token: string) => {
  return fetch(
    `${process.env.NEXT_PUBLIC_PAYMENT_SERVICE_URL}/sessions/create-checkout-session`,
    {
      method: "POST",
      body: JSON.stringify({
        cart,
      }),
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    }
  )
    .then((response) => response.json())
    .then((json) => json.checkoutSessionClientSecret);
};

const StripePaymentForm = ({
  shippingForm,
}: {
  shippingForm: ShippingFormInputs;
}) => {
  const { products } = useCartStore();
  const [token, setToken] = useState<string | null>(null);
  const [clientSecret, setClientSecret] = useState<string | null>(null);
  const { getToken } = useAuth();

  useEffect(() => {
    getToken().then((token) => setToken(token));
  }, [getToken]);
  useEffect(() => {
    if (!token) return;
    fetchClientSecret(products, token)
      .then((secret) => setClientSecret(secret))
      .catch((err) => {
        console.error("Failed to fetch client secret", err);
      });
  }, [token, products]);

  if (!token || !clientSecret) {
    return <div className="">Loading...</div>;
  }

  const decodedClientSecret = decodeURIComponent(clientSecret);
  const options = {
    clientSecret: decodedClientSecret,
  };

  return (
    <Elements stripe={stripe} options={options}>
      <CheckoutForm shippingForm={shippingForm} />
    </Elements>
  );
};
export default StripePaymentForm;
