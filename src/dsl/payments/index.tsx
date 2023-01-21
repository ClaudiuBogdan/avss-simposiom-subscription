import { getUserById } from "@/adapters/firebase";
import { createCheckoutSession } from "@/adapters/stripe";
import { config } from "@/config";
import { mapUserTypeToPriceId } from "./priceMap";
import { CheckoutInput } from "./types";

export const createCheckoutSessionUrl = async (
  checkoutInput: CheckoutInput
) => {
  const { userId } = checkoutInput;

  const user = await getUserById(userId);

  if (!user) {
    throw new Error("User not found");
  }

  const priceId = mapUserTypeToPriceId(user.userType, user.doctorType);

  const checkoutSession = await createCheckoutSession({
    customerId: user.customerId,
    priceId,
    successUrl: config.stripe.successUrl,
    cancelUrl: config.stripe.cancelUrl,
  });

  return checkoutSession.url;
};
