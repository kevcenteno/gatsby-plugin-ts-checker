const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');

exports.onCreateWebpackConfig = ({ stage, actions }, options) => {
  if (stage !== 'develop') {
    return;
  }

  actions.setWebpackConfig({
    plugins: [
      new ForkTsCheckerWebpackPlugin({
        async: false,
        formatter: 'codeframe',
        logger: {
          infrastructure: 'silent',
          issues: 'silent',
        },
        ...options,
      }),
    ],
  });
};
