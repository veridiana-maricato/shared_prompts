/** @type {import('next').NextConfig} */
const nextConfig = {
    webpack: (config, { isServer }) => {
        // Resolve aliases
        config.resolve.alias = {
            ...config.resolve.alias,
            '@components': path.resolve(__dirname, 'caminho/para/seus/componentes'),
            // Adicione outros aliases aqui conforme necessário
        };
        return config
    }
}

module.exports = nextConfig
