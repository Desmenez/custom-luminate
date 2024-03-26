const nextConfig = require('@luminate/next-config')
const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
})

/**
 * @type {import('next').NextConfig}
 */
const newNextConfig = {
  ...nextConfig,
  async rewrites() {
    /**
     * @type {import('next/dist/lib/load-custom-routes').Rewrite[]}
     */
    const rewriteList = []
    if (process.env.ENABLE_PLAYGROUND !== 'true') {
      rewriteList.push({
        source: `/playground/:path*`,
        destination: '/404',
      })
    }
    return {
      beforeFiles: rewriteList,
    }
  },
  modularizeImports: {
    '@fortawesome/free-brands-svg-icons': {
      transform: '@fortawesome/free-brands-svg-icons/{{ member }}',
      skipDefaultConversion: true,
    },
    '@fortawesome/pro-regular-svg-icons': {
      transform: '@fortawesome/pro-regular-svg-icons/{{ member }}',
      skipDefaultConversion: true,
    },
    '@fortawesome/pro-solid-svg-icons': {
      transform: '@fortawesome/pro-solid-svg-icons/{{ member }}',
      skipDefaultConversion: true,
    },
  },
  experimental: {
    scrollRestoration: true,
  },
  webpack(config) {
    // Grab the existing rule that handles SVG imports
    const fileLoaderRule = config.module.rules.find((rule) => rule.test?.test?.('.svg'))

    config.module.rules.push(
      // Reapply the existing rule, but only for svg imports ending in ?url
      {
        ...fileLoaderRule,
        test: /\.svg$/i,
        resourceQuery: /url/, // *.svg?url
      },
      // Convert all other *.svg imports to React components
      {
        test: /\.svg$/i,
        issuer: /\.[jt]sx?$/,
        resourceQuery: { not: /url/ }, // exclude if *.svg?url
        use: [
          {
            loader: '@svgr/webpack',
            options: {
              svgo: true,
              svgoConfig: {
                plugins: [
                  {
                    name: 'preset-default',
                    params: {
                      overrides: {
                        // disable plugins
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
    )

    // Modify the file loader rule to ignore *.svg, since we have it handled now.
    fileLoaderRule.exclude = /\.svg$/i

    return config
  },
}

module.exports = withBundleAnalyzer(newNextConfig)
