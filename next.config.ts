import type { NextConfig } from "next";

const isGithubActions = process.env.GITHUB_ACTIONS === "true";
const repository = process.env.GITHUB_REPOSITORY?.split("/")[1] ?? "";
const owner = process.env.GITHUB_REPOSITORY_OWNER ?? "";
const isUserOrOrgPage =
  repository.toLowerCase() === `${owner.toLowerCase()}.github.io`;
const basePath =
  isGithubActions && !isUserOrOrgPage && repository ? `/${repository}` : "";

const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  env: {
    NEXT_PUBLIC_BASE_PATH: basePath,
  },
  basePath,
  assetPrefix: basePath ? `${basePath}/` : undefined,
};

export default nextConfig;
