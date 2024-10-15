module.exports = {
    resolve: {
      extensions: ['.js', '.ts', '.feature'],
    },
    module: {
      rules: [
        {
          test: /\.feature$/,
          use: [
            {
              loader: '@badeball/cypress-cucumber-preprocessor/webpack',
            },
          ],
        },
      ],
    },
  };
  
