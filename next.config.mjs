/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export',
    distDir: 'out',  // or your preferred output directory
    images: {
        unoptimized: true,
    },
};

export default nextConfig;
