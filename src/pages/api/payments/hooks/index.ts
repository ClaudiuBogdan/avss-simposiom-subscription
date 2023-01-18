import type { NextApiRequest, NextApiResponse } from "next";
import { parseRawEvent } from "@/adapters/stripe";
import { processEvent } from "@/dsl/payments/processEvent";
import { Readable } from "node:stream";

export const config = {
  api: {
    bodyParser: false,
  },
};

async function buffer(readable: Readable) {
  const chunks = [];
  for await (const chunk of readable) {
    chunks.push(typeof chunk === "string" ? Buffer.from(chunk) : chunk);
  }
  return Buffer.concat(chunks);
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const rawEvent = await buffer(req);
  const stripeSignature = req.headers["stripe-signature"] as string;
  const event = parseRawEvent(rawEvent, stripeSignature);
  // @ts-ignore
  event.data.object.customer = "cus_NC6U0iOdFnBuUs"; // FIXME: remove
  await processEvent(event);

  res.status(200).send({});
}
