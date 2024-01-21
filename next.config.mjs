/** @type {import('next').NextConfig} */
const nextConfig = {
    experimental: {
        serverActions: {
            allowedOrigins: [
                "localhost:3000",
                "animated-dollop-g6rjx956g5rfw7xx-3000.app.github.dev",
            ]
        }
    }
}

export default nextConfig
