import * as Sentry from "@sentry/nextjs";

export function logExceptionHandler(error: Error) {
  Sentry.captureException(error);
}
