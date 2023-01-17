import { UserType } from "@/dsl/users/types";
import { IsNotEmpty, IsEmail, IsPhoneNumber, IsEnum } from "class-validator";

export class CreateUserInput {
  @IsNotEmpty()
  name: string;

  @IsEmail()
  email: string;

  @IsPhoneNumber("RO")
  phone: string;

  @IsEnum(UserType)
  userType: UserType;
}
