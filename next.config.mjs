/** @type {import('next').NextConfig} */
const nextConfig = {
    webpack: (config) => {
        config.cache = false;  // Disable Webpack cache
        return config;
      },
};

export default nextConfig;
