import {
  Body,
  Catch,
  createHandler,
  Post,
  ValidationPipe,
} from "next-api-decorators";
import { createUser } from "@/dsl/users";
import { CreateUserInput } from "./_types";
import { logExceptionHandler } from "@/adapters/sentry";
import { createCheckoutSessionUrl } from "@/dsl/payments";

@Catch(logExceptionHandler)
class UserHandler {
  @Post()
  async createUser(@Body(ValidationPipe({ whitelist: true })) body: CreateUserInput) {
    Object.keys(body).forEach((rawKey: unknown) => {
      const key = rawKey as keyof CreateUserInput;
      if (body[key] === "") {
        delete body[key];
      }
    });
    const user = await createUser(body);
    const url = await createCheckoutSessionUrl({userId: user.id});

    if(!url) throw new Error("Could not create checkout session url")
    
    return {
      user: {
        id: user.id,
      },
      checkout: {
        url
      }
    }
  }
}

export default createHandler(UserHandler);
