/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  i18n: {
    // providing the locales supported by your application
    locales: ["ar", "en"],
    //  default locale used when the non-locale paths are visited
    defaultLocale: "ar",
    localeDetection: false,
  },
};

module.exports = nextConfig;
