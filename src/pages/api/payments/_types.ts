import { IsUUID } from "class-validator";

export class CheckoutSessionInput {
  @IsUUID()
  userId: string;
}
