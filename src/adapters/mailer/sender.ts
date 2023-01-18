import { config } from "@/config";
import { mailer } from "./init";

export const sendPaymentConfirmationEmail = async (args: {
  email: string;
  name: string;
}) => {
  const from = config.smtp.fromEmail;
  const { email: to } = args;

  // send mail with defined transport object
  const info = await mailer.sendMail({
    from, // sender address
    to, // list of receivers
    subject: "Successful payment ✔", // Subject line
    text: "The payment was successful", // plain text body
    html: "<b>Thank you!</b>", // html body
  });
  console.log('Message sent: %s', info.messageId);
};
