/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  // Ajoute le nom du dépôt à l'URL pour que les styles et fichiers soient trouvés
  basePath: '/HRS',
  images: {
    unoptimized: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;
