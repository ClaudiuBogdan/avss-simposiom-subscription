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
    successUrl: `${loadEnv("APP_BASE_URL")}/successful-payment`,
    cancelUrl: `${loadEnv("APP_BASE_URL")}/canceled-payment`,
  },
  app: {
    name: loadEnv("APP_NAME"),
    version: loadEnv("APP_VERSION"),
    baseUrl: loadEnv("APP_BASE_URL"),
  },
};
