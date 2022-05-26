/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["cdn.weatherapi.com"],
  },
};

module.exports = {
  images: {
    domains: ["https://cdn.weatherapi.com/weather/64x64/night/113.png"],
  },
};
