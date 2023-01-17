import { Stripe } from "stripe";

type Price = {
  id: string;
  value: number;
  currency: "RON";
};

export const NON_MEDICAL_PRICE: Price = Object.freeze({
  id: "price_1MRKVcHuk0JibvTm9ttlMKZz", //FIXME: Price id from Stripe dashboard
  value: 60, // Prices must also be changed in Stripe dashboard
  currency: "RON",
});

export const NURSE_PRICE: Price = Object.freeze({
  id: "price_1MRKVcHuk0JibvTmey2hdbBT",
  value: 150,
  currency: "RON",
});

export const RESIDENT_DOCTOR_PRICE: Price = Object.freeze({
  id: "price_1MRKVcHuk0JibvTmo2ZxVDKQ",
  value: 150,
  currency: "RON",
});

export const DOCTOR_PRICE: Price = Object.freeze({
  id: "price_1MRKVcHuk0JibvTmZuCzb1SF",
  value: 250,
  currency: "RON",
});
