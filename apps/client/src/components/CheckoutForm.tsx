"use client";

import { ShippingFormInputs } from "@repo/types";
import {
  useStripe,
  useElements,
  PaymentElement,
} from "@stripe/react-stripe-js";
import { StripeError } from "@stripe/stripe-js";
import { useState } from "react";

const CheckoutForm = ({
  shippingForm,
}: {
  shippingForm: ShippingFormInputs;
}) => {
  const stripe = useStripe();
  const elements = useElements();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<StripeError | null>(null);

  const handleClick = async () => {
    if (!stripe || !elements) return;

    setLoading(true);
    const res = await stripe.confirmPayment({
      elements,
      redirect: "if_required",
    });
    if (res.error) {
      setError(res.error);
    }
    setLoading(false);
  };

  return (
    <form className="w-full max-w-md mx-auto space-y-4">
      <div className="py-4 border border-gray-200 rounded-lg p-4 min-h-96">
        <PaymentElement options={{ layout: "tabs" }} />
      </div>
      <button
        type="submit"
        className="w-full bg-primary text-white py-2 rounded hover:bg-red-600 disabled:opacity-50"
        disabled={loading}
        onClick={handleClick}
      >
        {loading ? "Loading..." : "Pay"}
      </button>
      {error && <div className="text-red-500 text-sm">{error.message}</div>}
    </form>
  );
};

export default CheckoutForm;
