import { config } from "@/config";
import { stripe } from "./init";

export const parseRawEvent = (rawEvent: string | Buffer, signature: string) => {
  // Parse stripe event and verify signature
  const webhookSecret = config.stripe.webhookSecret;

  const event = stripe.webhooks.constructEvent(
    rawEvent,
    signature,
    webhookSecret
  );

  if (!event) {
    throw new Error("Construct stripe event failed");
  }

  return event;
};
