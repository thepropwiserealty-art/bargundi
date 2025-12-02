/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          {
            key: 'X-Frame-Options',
            value: 'DENY', // Prevents clickjacking attacks
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff', // Prevents MIME-sniffing attacks
          },
          {
            key: 'Referrer-Policy',
            value: 'strict-origin-when-cross-origin', // Controls how much info is sent to other sites
          },
          {
            key: 'Strict-Transport-Security',
            value: 'max-age=63072000; includeSubDomains; preload', // Enforces HTTPS
          },
          // Content Security Policy (CSP)
          {
            key: 'Content-Security-Policy',
            // FIX: 
            // 1. Added "https://www.recaptcha.net" to frame-src
            // 2. Added "https://www.google.com https://www.gstatic.com https://www.recaptcha.net" to connect-src (required for captcha validation)
            value: "default-src 'self'; connect-src 'self' https://maps.googleapis.com https://www.google.com https://www.gstatic.com https://www.recaptcha.net; frame-src 'self' https://www.google.com https://www.recaptcha.net; img-src 'self' data: https:; script-src 'self' 'unsafe-inline' 'unsafe-eval' https:; style-src 'self' 'unsafe-inline' https:; font-src 'self' data: https:;"
          }
        ],
      },
    ]
  },
}

export default nextConfig