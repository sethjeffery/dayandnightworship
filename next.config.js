/** @type {import('next').NextConfig} */
module.exports = {
  webpack(config) {
    config.module.rules.push(
      {
        test: /\.svg$/,
        use: [
          {
            loader: "@svgr/webpack",
            options: {
              svgoConfig: {
                plugins: [
                  {
                    name: "removeViewBox",
                    active: false,
                  },
                ],
              },
            },
          },
        ],
      },
      {
        test: /\.ya?ml$/,
        use: "yaml-loader",
      }
    );

    return config;
  },
};
