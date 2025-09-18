import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  trailingSlash: false,
  typescript: {
    ignoreBuildErrors: false,
  },
  eslint: {
    ignoreDuringBuilds: false,
  },
  // SEO optimizations
  compress: true,
  poweredByHeader: false,
  generateEtags: true,
  // Image optimization
  images: {
    formats: ["image/webp", "image/avif"],
    minimumCacheTTL: 60,
    dangerouslyAllowSVG: true,
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
  },
  // Headers for SEO and security
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          {
            key: "X-Content-Type-Options",
            value: "nosniff",
          },
          {
            key: "X-Frame-Options",
            value: "DENY",
          },
          {
            key: "X-XSS-Protection",
            value: "1; mode=block",
          },
          {
            key: "Referrer-Policy",
            value: "strict-origin-when-cross-origin",
          },
          {
            key: "Permissions-Policy",
            value: "camera=(), microphone=(), geolocation=()",
          },
        ],
      },
      {
        source: "/sitemap.xml",
        headers: [
          {
            key: "Content-Type",
            value: "application/xml",
          },
          {
            key: "Cache-Control",
            value: "public, max-age=86400, s-maxage=86400",
          },
        ],
      },
      {
        source: "/robots.txt",
        headers: [
          {
            key: "Content-Type",
            value: "text/plain",
          },
          {
            key: "Cache-Control",
            value: "public, max-age=86400, s-maxage=86400",
          },
        ],
      },
    ];
  },
  // Redirects for SEO - capture various search terms
  async redirects() {
    return [
      {
        source: "/futurehack",
        destination: "/",
        permanent: true,
      },
      {
        source: "/hackathon",
        destination: "/",
        permanent: true,
      },
      {
        source: "/future-x",
        destination: "/",
        permanent: true,
      },
      {
        source: "/future-hackathon",
        destination: "/",
        permanent: true,
      },
      {
        source: "/2026-hackathon",
        destination: "/",
        permanent: true,
      },
      {
        source: "/ai-hackathon",
        destination: "/",
        permanent: true,
      },
      {
        source: "/skillnet-hackathon",
        destination: "/",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
