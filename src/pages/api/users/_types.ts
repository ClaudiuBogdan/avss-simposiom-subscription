import { IsNotEmpty, IsEmail, IsPhoneNumber } from "class-validator";

export class CreateUserDTO {
  @IsNotEmpty()
  name: string;

  @IsEmail()
  email: string;

  @IsPhoneNumber("RO")
  phone: string;
}
