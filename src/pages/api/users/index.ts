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

@Catch(logExceptionHandler)
class UserHandler {
  @Post()
  createUser(@Body(ValidationPipe({ whitelist: true })) body: CreateUserInput) {
    Object.keys(body).forEach((rawKey: unknown) => {
      const key = rawKey as keyof CreateUserInput;
      if (body[key] === "") {
        delete body[key];
      }
    });
    return createUser(body);
  }
}

export default createHandler(UserHandler);
