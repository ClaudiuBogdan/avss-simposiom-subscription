import { logExceptionHandler } from "@/adapters/sentry";
import { createCheckoutSessionUrl } from "@/dsl/payments";
import { Body, Catch, createHandler, Post, ValidationPipe } from "next-api-decorators";
import { CheckoutSessionInput } from "./_types";


@Catch(logExceptionHandler)
class PaymentsHandler {
  @Post()
  createCheckoutSession(@Body(ValidationPipe) body: CheckoutSessionInput) {
    return createCheckoutSessionUrl(body);
  }
}

export default createHandler(PaymentsHandler);
