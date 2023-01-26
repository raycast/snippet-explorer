/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
};

module.exports = {
  ...nextConfig,

  async redirects() {
    return [
      {
        source: "/",
        has: [
          {
            type: "query",
            key: "snippet",
          },
        ],
        permanent: false,
        destination: "/shared",
      },
    ];
  },
};
