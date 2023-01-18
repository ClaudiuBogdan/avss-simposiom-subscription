import {
  Body,
  createHandler,
  Get,
  Post,
  ValidationPipe,
} from "next-api-decorators";
import { createUser } from "@/dsl/users";
import { CreateUserInput } from "./_types";
import { withSentry, wrapApiHandlerWithSentry } from "@sentry/nextjs";

// pages/api/user.ts
class UserHandler {
  @Post()
  createUser(@Body(ValidationPipe) body: CreateUserInput) {
    return createUser(body);
  }

  @Get()
  getUser() {
    throw new Error("Test error");
  }
}

export default createHandler(UserHandler);
