/** @type {import('next').NextConfig} */
const nextConfig = {
 basePath: '/fonz',
 trailingSlash: true,
 experimental: {
  missingSuspenseWithCSRBailout: false,
  manualClientBasePath: true,
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
