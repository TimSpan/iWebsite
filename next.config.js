/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "standalone",
  images: {
    unoptimized: true,
  },
  // devServer: {
  //   host: '192.168.19.70',
  //   port: 3300,
  // },

}

module.exports = nextConfig
