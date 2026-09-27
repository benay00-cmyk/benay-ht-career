import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  serverExternalPackages: ["unpdf", "mammoth"],
  async redirects() {
    return [
      {
        source: "/danismanlik",
        destination: "/egitimler#danismanlik",
        permanent: true,
      },
      {
        source: "/is-hayati",
        destination: "/is-arayanlar",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
