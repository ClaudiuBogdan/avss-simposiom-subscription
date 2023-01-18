/** @type {import('next').NextConfig} */
const { withSentryConfig } = require('@sentry/nextjs');

const nextConfig = {
  experimental: {
    appDir: true,
  },
  sentry: {
    hideSourceMaps: false,
    autoInstrumentServerFunctions: true,
  },
}

const sentryWebpackPluginOptions = {
  silent: true, 
};

module.exports = withSentryConfig(nextConfig, sentryWebpackPluginOptions);