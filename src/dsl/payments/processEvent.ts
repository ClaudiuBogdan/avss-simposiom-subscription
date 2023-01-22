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

      const paymentId = payment.id.substring(3, 11);
      const paymentAmount =
        (payment.amount / 100).toFixed(2) +
        " " +
        payment.currency.toUpperCase();

      const paymentDate = new Date(payment.created * 1000).toLocaleDateString();

      await sendPaymentConfirmationEmail({
        email: user.email,
        firstName: user.firstName,
        paymentId,
        paymentAmount,
        paymentDate,
      });

      console.log("payment_intent.succeeded");
      break;
    case "payment_intent.payment_failed":
      console.log("payment_intent.payment_failed");
      break;
    default:
      throw new Error(`Unhandled event type ${event.type}`);
  }
};
