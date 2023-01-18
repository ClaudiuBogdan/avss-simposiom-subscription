import { config } from "@/config";
import nodemailer from "nodemailer";

const configOptions = {
  host: config.smtp.host,
  port: config.smtp.port,
  secure: true,
  auth: {
    user: config.smtp.auth.user,
    pass: config.smtp.auth.pass,
  },
};

export const mailer = nodemailer.createTransport(configOptions);
