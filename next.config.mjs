import { redirects } from "./src/lib/seo/redirects.mjs";
/** @type {import('next').NextConfig} */
const nextConfig = {
  // Keep a running development preview from replacing production artifacts.
  distDir: process.env.NODE_ENV === "development" ? ".next" : "build",
  trailingSlash: false,
  async redirects() {
    return [
      {
        source: "/:path*",
        has: [{ type: "host", value: "laodiceasolutions.com" }],
        destination: "https://www.laodiceasolutions.com/:path*",
        permanent: true,
      },
      ...redirects,
    ];
  },
};
export default nextConfig;
