const { findAllPackageMetadatas } = require('@luminate/workspace')

const transpilePackages = findAllPackageMetadatas(['packages/database']).map((p) => p.name)

/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  transpilePackages: transpilePackages,
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'static.monkeyeveryday.com',
        port: '',
        pathname: '/**',
      },
      // TODO: Remove this once we have GCP
      {
        protocol: 'https',
        hostname: 'media.discordapp.net',
        port: '',
        pathname: '/attachments/**',
      },
      {
        protocol: 'https',
        hostname: 'cdn.discordapp.com',
        port: '',
        pathname: '/attachments/**',
      },
      {
        protocol: 'https',
        hostname: 'storage.googleapis.com',
        port: '',
        pathname: '/**',
      },
    ],
  },
}
