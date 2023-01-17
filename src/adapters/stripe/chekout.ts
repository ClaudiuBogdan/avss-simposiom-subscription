import { stripe } from "./init";
import { CreateCheckoutInput } from "./types";

export const createCheckoutSession = async (input: CreateCheckoutInput) => {
    return stripe.checkout.sessions.create({
        customer: input.customerId,
        payment_method_types: ["card"],
        line_items: [
            {
                price: input.priceId,
                quantity: 1,
            },
        ],
        mode: "payment",
        success_url: input.successUrl,
        cancel_url: input.cancelUrl,
    })
};
