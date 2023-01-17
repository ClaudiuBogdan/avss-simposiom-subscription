import { Body, createHandler, Post, ValidationPipe } from 'next-api-decorators';
import { createUser } from "@/dsl/users";
import { CreateUserInput } from "./_types";

// pages/api/user.ts
class UserHandler {
  @Post()
  createUser(@Body(ValidationPipe) body: CreateUserInput) {
    return createUser(body);
  }
}

export default createHandler(UserHandler);
