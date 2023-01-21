import { UserType } from "@/dsl/users/types";
import {
  IsNotEmpty,
  IsEmail,
  IsPhoneNumber,
  IsEnum,
  IsString,
} from "class-validator";

export class CreateUserInput {
  @IsNotEmpty()
  firstName: string;

  @IsNotEmpty()
  lastName: string;

  @IsEmail()
  email: string;

  @IsPhoneNumber("RO")
  phone: string;

  @IsEnum(UserType)
  userType: UserType;

  @IsString()
  occupation: string;

  @IsString()
  faculty: string;

  @IsString()
  studyYear: string;

  @IsString()
  nurseId: string;

  @IsString()
  workingPlace: string;

  @IsString()
  county: string;

  @IsString()
  doctorType: string;

  @IsString()
  cuim: string;

  @IsString()
  specialty: string;
}
