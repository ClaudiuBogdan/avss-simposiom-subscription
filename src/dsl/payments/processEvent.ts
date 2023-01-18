import { updateUserPayment } from "@/adapters/firebase";
import { sendPaymentConfirmationEmail } from "@/adapters/mailer";
import Stripe from "stripe";
import { UserPayment } from "./types";

const mapEventToPayment = (event: Stripe.Event): UserPayment => {
  const payment = event.data.object as Stripe.PaymentIntent;
  return {
    id: payment.id,
    amount: payment.amount,
    amountReceived: payment.amount_received,
    status: payment.status,
    currency: payment.currency,
    customerId: String(payment.customer),
    paymentMethodId: String(payment.payment_method),
    created: payment.created,
  };
};

export const processEvent = async (event: Stripe.Event) => {
  switch (event.type) {
    case "payment_intent.succeeded":
      const payment = mapEventToPayment(event);
      const user = await updateUserPayment(payment.customerId, payment);
      await sendPaymentConfirmationEmail(user);
      console.log("payment_intent.succeeded");
      break;
    case "payment_intent.payment_failed":
      console.log("payment_intent.payment_failed");
      break;
    default:
      throw new Error(`Unhandled event type ${event.type}`);
  }
};
