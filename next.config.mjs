<<<<<<< HEAD
import { fileURLToPath } from 'url'
import { dirname } from 'path'

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

=======
>>>>>>> 604e8331dc6888eebdf3e73908b9235ecec41119
/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
<<<<<<< HEAD
  experimental: {
    turbo: {
      root: __dirname,
    },
  },
=======
>>>>>>> 604e8331dc6888eebdf3e73908b9235ecec41119
}

export default nextConfig
