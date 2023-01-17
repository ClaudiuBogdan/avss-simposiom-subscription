import { config } from "@/config";
import { Stripe } from "stripe";

export const stripe = new Stripe(config.stripe.secretKey, {
  apiVersion: "2022-11-15",
  appInfo: {
    // For sample support and debugging, not required for production:
    name: config.app.name,
    version: config.app.version,
  },
  typescript: true,
});
