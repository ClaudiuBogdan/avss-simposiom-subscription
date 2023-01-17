import { createCheckoutSessionUrl } from "@/dsl/payments";
import { Body, createHandler, Post, ValidationPipe } from "next-api-decorators";
import { CheckoutSessionInput } from "./_types";

class PaymentsHandler {
  @Post()
  createCheckoutSession(@Body(ValidationPipe) body: CheckoutSessionInput) {
    return createCheckoutSessionUrl(body);
  }
}

export default createHandler(PaymentsHandler);
