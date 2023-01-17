import { Body, createHandler, Post, ValidationPipe } from 'next-api-decorators';
import { createUser } from "@/dsl/users";
import { CreateUserDTO } from "./_types";

// pages/api/user.ts
class UserHandler {
  @Post()
  createUser(@Body(ValidationPipe) body: CreateUserDTO) {
    return createUser(body);
  }
}

export default createHandler(UserHandler);
