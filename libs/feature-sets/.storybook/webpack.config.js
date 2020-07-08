const rootWebpackConfig = require ('../../../.storybook/webpack.config');
const path = require ('path');

// Export a function. Accept the base config as the only param.
module.exports = async ({ config, mode }) => {
  config = await rootWebpackConfig ({ config, mode });
  config.resolve.alias['@test-full-stack/data-access'] = path.resolve(
    __dirname,
    '../../data-access/src'
  );
  config.resolve.extensions.push ('.tsx');
  config.resolve.extensions.push ('.ts');
  const babelLoader = {
    test: /\.(ts|tsx)$/,
    loader: require.resolve ('babel-loader'),
    options: {
      presets: [
        '@babel/preset-env',
        '@babel/preset-react',
        '@babel/preset-typescript'
      ]
    }
  };
  config.module.rules.push (babelLoader);
  return config;
};
