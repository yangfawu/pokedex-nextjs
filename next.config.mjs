/** @type {import('next').NextConfig} */
const nextConfig = {
    experimental: {
        serverActions: {
            allowedOrigins: [
                "localhost:3000",
                process.env.FORWARDED_HOST,
            ]
        }
    }
}

export default nextConfig
