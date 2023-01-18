export type CheckoutInput = {
  userId: string;
};

export type UserPayment = {
  id: string;
  amount: number;
  amountReceived: number;
  status: string;
  currency: string;
  customerId: string;
  paymentMethodId: string;
  created: number;
};
