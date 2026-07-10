import { Hono } from "hono";
import stripe from "../../utils/stripe.js";
import { checkAuth } from "../middleware/middleware.js";

const sessionRouter = new Hono();

// CRUD routes for s
sessionRouter.post("/create-checkout-session", checkAuth, async (c) => {
  try {
    const session = await stripe.checkout.sessions.create({
      line_items: [
        {
          price_data: {
            currency: "usd",
            product_data: {
              name: "T-shirt",
            },
            unit_amount: 2000,
          },
          quantity: 1,
        },
      ],
      mode: "payment",
      ui_mode: "custom",
      return_url:
        "https://localhost:3002/return?session_id={CHECKOUT_SESSION_ID}",
      expand: ["payment_intent"],
    });
    // Prefer returning the PaymentIntent client secret which Elements expects
    let clientSecret: string | null = null;
    const paymentIntentRaw = (session.payment_intent as any) || null;
    if (paymentIntentRaw) {
      if (typeof paymentIntentRaw === "object") {
        clientSecret = paymentIntentRaw.client_secret || null;
      } else if (typeof paymentIntentRaw === "string") {
        // retrieve payment intent to get the client_secret
        try {
          const pi = await stripe.paymentIntents.retrieve(paymentIntentRaw);
          clientSecret = (pi as any).client_secret || null;
        } catch (err) {
          console.error("Failed to retrieve PaymentIntent", err);
        }
      }
    }

    // fallback: if we still don't have a PaymentIntent client_secret, try creating one
    if (!clientSecret) {
      try {
        const pi = await stripe.paymentIntents.create({
          amount: 2000,
          currency: "usd",
        });
        clientSecret = (pi as any).client_secret || null;
      } catch (err) {
        console.error("Failed to create fallback PaymentIntent", err);
      }
    }

    console.log("Returning client secret:", clientSecret);
    return c.json({ checkoutSessionClientSecret: clientSecret });
  } catch (error) {
    return c.json({ message: "server Error", error });
    console.log(error);
  }
});

export default sessionRouter;
