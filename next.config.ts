import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    /* config options here */
    reactStrictMode: false,
    typescript: {
        ignoreBuildErrors: true, // 忽略类型检查错误
     },
    
};

export default nextConfig;
