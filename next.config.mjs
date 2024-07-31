/** @type {import('next').NextConfig} */
const nextConfig = {
 basePath: '/fonz',
 async rewrites() {
  return [
   {
    source: '/fonz/:path*',
    destination: 'http://localhost:3001/fonz/:path*',
   },
  ]
 },
 trailingSlash: false,
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
