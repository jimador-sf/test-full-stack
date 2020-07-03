const rootWebpackConfig = require('../../../.storybook/webpack.config');
// Export a function. Accept the base config as the only param.
module.exports = async ({ config, mode }) => {
  config = await rootWebpackConfig({ config, mode });

  config.resolve.extensions.push('.tsx');
  config.resolve.extensions.push('.ts');
  const babelLoader = {
    test: /\.(ts|tsx)$/,
    loader: require.resolve('babel-loader'),
    options: {
      presets: [
        '@babel/preset-env',
        '@babel/preset-react',
        '@babel/preset-typescript',
      ],
    },
  };
  const fileLoader = {
    test: /\.(png|jpe?g|gif)$/i,
    use: [
      {
        loader: require.resolve('file-loader'),
      },
    ],
  };
  config.module.rules.push(babelLoader);
  config.module.rules.push(fileLoader);
  return config;
};
