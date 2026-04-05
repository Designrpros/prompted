import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: "/prompted",
  turbopack: {
    root: "/Users/vegarberentsen/.peaknode/workspace/projects/Github/Designrpros/prompted",
  },
  compiler: {
    styledComponents: true,
  },
};

export default nextConfig;
