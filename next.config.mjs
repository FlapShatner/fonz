const useProxy = true

/** @type {import('next').NextConfig} */
const nextConfig = {
 assetPrefix: useProxy ? '/fonz/' : '',
 experimental: {
  missingSuspenseWithCSRBailout: false,
 },
 transpilePackages: ['jotai-devtools'],
 images: {
  remotePatterns: [
   {
    protocol: 'https',
    hostname: 'res.cloudinary.com',
   },
   {
    protocol: 'https',
    hostname: 'cdn.shopify.com',
   },
  ],
 },
}

export default nextConfig
