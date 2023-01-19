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
  createUser(@Body(ValidationPipe) body: CreateUserInput) {
    return createUser(body);
  }
}

export default createHandler(UserHandler);
