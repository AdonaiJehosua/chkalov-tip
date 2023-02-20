/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
}

module.exports = nextConfig

module.exports = {
  webpack: (config) => {
    config.module.rules.push({
      test: /\.(woff(2)?|eot|ttf|otf)$/,
      use: [
        {
          loader: 'file-loader',
          options: {
            name: './font/[hash].[ext]',
            outputPath: 'assets/fonts'
          },
        },
      ],
    })

    return config
  },
}
