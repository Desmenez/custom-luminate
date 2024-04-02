const nextConfig = require("@luminate/next-config");
const withBundleAnalyzer = require("@next/bundle-analyzer")({
  enabled: process.env.ANALYZE === "true",
});

const BASE_PATH = "/learning-space";

/**
 * @type {import('next').NextConfig}
 */
const newNextConfig = {
  ...nextConfig,
  basePath: BASE_PATH,
  // Add or merge the images configuration here
  images: {
    domains: [
      ...(nextConfig.images?.domains || []),
      "picsum.photos",
      "loremflickr.com",
      "cloudflare-ipfs.com",
    ],
  },
  async rewrites() {
    const rewriteList = [];
    if (process.env.ENABLE_PLAYGROUND !== "true") {
      rewriteList.push({
        source: `/playground/:path*`,
        destination: "/404",
      });
    }
    return {
      beforeFiles: rewriteList,
    };
  },
  modularizeImports: {
    "@fortawesome/free-brands-svg-icons": {
      transform: "@fortawesome/free-brands-svg-icons/{{ member }}",
      skipDefaultConversion: true,
    },
    "@fortawesome/pro-regular-svg-icons": {
      transform: "@fortawesome/pro-regular-svg-icons/{{ member }}",
      skipDefaultConversion: true,
    },
    "@fortawesome/pro-solid-svg-icons": {
      transform: "@fortawesome/pro-solid-svg-icons/{{ member }}",
      skipDefaultConversion: true,
    },
  },
  experimental: {
    scrollRestoration: true,
  },
  env: {
    NEXT_PUBLIC_BASE_PATH: BASE_PATH,
  },
  async redirects() {
    return [
      {
        source: `/`,
        destination: `${BASE_PATH}`,
        permanent: false,
        basePath: false,
      },
    ];
  },
  webpack(config) {
    const fileLoaderRule = config.module.rules.find((rule) =>
      rule.test?.test?.(".svg")
    );

    config.module.rules.push(
      {
        ...fileLoaderRule,
        test: /\.svg$/i,
        resourceQuery: /url/,
      },
      {
        test: /\.svg$/i,
        issuer: /\.[jt]sx?$/,
        resourceQuery: { not: /url/ },
        use: [
          {
            loader: "@svgr/webpack",
            options: {
              svgo: true,
              svgoConfig: {
                plugins: [
                  {
                    name: "preset-default",
                    params: {
                      overrides: {
                        removeViewBox: false,
                      },
                    },
                  },
                ],
              },
            },
          },
        ],
      }
    );

    fileLoaderRule.exclude = /\.svg$/i;

    return config;
  },
};

module.exports = withBundleAnalyzer(newNextConfig);
