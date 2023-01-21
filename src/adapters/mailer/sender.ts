import { config } from "@/config";
import { mailer } from "./init";
import { createSuccessfulPaymentEmailTemplate } from "./templates/successfulPaymentEmail";

export const sendPaymentConfirmationEmail = async (args: {
  email: string;
  firstName: string;
  paymentId: string;
  paymentAmount: string;
  paymentDate: string;
}) => {
  const from = config.smtp.fromEmail;
  const { email: to, firstName, paymentId, paymentAmount, paymentDate } = args;

  const emailTemplate = createSuccessfulPaymentEmailTemplate({
    firstName,
    paymentId,
    paymentAmount,
    paymentDate,
  });

  // send mail with defined transport object
  const info = await mailer.sendMail({
    from, // sender address
    to, // list of receivers
    subject: "Plata a fost procesata cu succes!", // Subject line
    html: emailTemplate, // html body
  });
  console.log("Message sent: %s", info.messageId);
};
