import Stripe from "stripe";

export const processEvent = async (event: Stripe.Event) => {
  switch (event.type) {
    case "payment_intent.succeeded":
      console.log("payment_intent.succeeded");
      break;
    case "payment_intent.payment_failed":
      console.log("payment_intent.payment_failed");
      break;
    default:
      throw new Error(`Unhandled event type ${event.type}`);
  }
};
