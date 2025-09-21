/** @type {import('next').NextConfig} */
const nextConfig = {
  i18n: {
    locales: ["en","ar","pt","pt-BR","es","fr","it","de"],
    defaultLocale: "en"
  },
  images: { unoptimized: true }
};
module.exports = nextConfig;
