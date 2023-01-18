export const sendPaymentConfirmationEmail = async (args: {
  email: string;
  name: string;
}) => {
  const { email } = args;
  const { name } = args;
  console.log(`Sending payment confirmation email to ${email}...`);
};
