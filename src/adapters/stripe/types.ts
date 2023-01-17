export type CreateCheckoutInput = {
  customerId: string;
  priceId: string;
  successUrl: string;
  cancelUrl: string;
};

export type CreateCustomerInput = {
  userId: string;
  email: string;
  fullName: string;
};
