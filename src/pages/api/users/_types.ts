import { IsNotEmpty, IsEmail, IsPhoneNumber } from "class-validator";
import { BaseResponse } from "../_types";

export class CreateUserDTO {
  @IsNotEmpty()
  name: string;

  @IsEmail()
  email: string;

  @IsPhoneNumber("RO")
  phone: string;
}

export type CreateUserResponse = BaseResponse & {};
