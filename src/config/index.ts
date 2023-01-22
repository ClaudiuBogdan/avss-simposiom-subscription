// https://nextjs.org/docs/basic-features/environment-variables

const loadEnv = (key: string, defaultValue?: any) => {
  const value = process.env[key];
  if (value !== undefined) {
    return value;
  }
  if (defaultValue !== undefined) {
    return defaultValue;
  }
  throw new Error(`Missing environment variable: ${key}`);
};

export const config = {
  firebase: {
    credential: loadEnv("FIREBASE_CREDENTIAL"),
    databaseURL: loadEnv("FIREBASE_DATABASE_URL"),
  },
  stripe: {
    secretKey: loadEnv("STRIPE_SECRET_KEY"),
    webhookSecret: loadEnv("STRIPE_WEBHOOK_SECRET"),
    successUrl: `${loadEnv("APP_BASE_URL")}/successful-payment`,
    cancelUrl: `${loadEnv("APP_BASE_URL")}/canceled-payment`,
  },
  app: {
    name: loadEnv("APP_NAME"),
    version: loadEnv("APP_VERSION"),
    baseUrl: loadEnv("APP_BASE_URL"),
  },
  smtp: {
    fromEmail: loadEnv("SMTP_FROM_EMAIL"),
    host: loadEnv("SMTP_HOST"),
    port: loadEnv("SMTP_PORT"),
    auth: {
      user: loadEnv("SMTP_USERNAME"),
      pass: loadEnv("SMTP_PASSWORD"),
    },
  },
  facebook: {
    pageId: loadEnv("FACEBOOK_PAGE_ID"),
  }
};
