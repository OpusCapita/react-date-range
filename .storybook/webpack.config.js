/* Storybook default webpack configuration uses create-react-app configuration
 * It can be overridden with custom webpackconfig module like:
 * ```jsx
 * module.exports = (storybookBaseConfig, configType) => {}
 * configType 'DEVELOPMENT' or 'PRODUCTION'
 *
* */
const path = require('path');
const precss = require('precss');
const autoprefixer = require('autoprefixer');
const flexbugs = require('postcss-flexbugs-fixes');

module.exports = {
  resolve: {
    modules: [path.resolve('./', 'node_modules'), 'node_modules'],
    extensions: ['.js', '.jsx'],
    mainFields: ['es', 'cjs', 'browser', 'module', 'es:next', 'main'],
  },
  plugins: {
    // custom plugins
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              minimize: false,
            },
          },
          {
            loader: 'postcss-loader',
            options: {
              plugins: () => [flexbugs, precss, autoprefixer],
            },
          },
        ],
      }, {
        test: /\.scss$/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              minimize: false,
            },
          },
          {
            loader: 'postcss-loader',
            options: {
              plugins: () => [flexbugs, precss, autoprefixer],
            },
          },
          'sass-loader',
        ],
      },
      {
        test: /(\.jsx|\.js)$/,
        use: [
          'babel-loader',
        ],
        exclude: /(node_modules|bower_components)/,
      },
      {
        test: /\.svg$/,
        use: ['babel-loader', 'react-svg-loader'],
      },
      {
        test: /\.(woff|woff2)(\?v=\d+\.\d+\.\d+)?$/,
        use: [
          'url-loader?limit=100&mimetype=application/font-woff&name=fonts/[name].[ext]',
        ],
      },
      {
        test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,
        use: [
          'url-loader?limit=100&mimetype=application/octet-stream&name=fonts/[name].[ext]',
        ],
      },
      {
        test: /\.eot(\?v=\d+\.\d+\.\d+)?$/,
        use: [
          'file-loader?name=fonts/[name].[ext]',
        ],
      },
    ],
  },
};


// Extending seems not working
/*
module.exports = (storybookBaseConfig, configType) => {
  if (configType === 'DEVELOPMENT') {
    storybookBaseConfig.resolve.modules.push(path.resolve('./src', 'node_modules'), 'node_modules');
    storybookBaseConfig.resolve.extensions.push('.js', '.jsx');
    if (!storybookBaseConfig.resolve.mainFields) {
      storybookBaseConfig.resolve.mainFields = ['es', 'cjs', 'browser', 'module', 'es:next', 'main'];
    } else {
      storybookBaseConfig.resolve.mainFields.push('es', 'cjs', 'browser', 'module', 'es:next', 'main');
    }

    // Rules
    storybookBaseConfig.module.rules.push(
      {
        test: /\.css$/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              minimize: false,
            },
          },
          {
            loader: 'postcss-loader',
            options: {
              plugins: () => [flexbugs, precss, autoprefixer],
            },
          },
        ],
      }, {
        test: /\.scss$/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              minimize: false,
            },
          },
          {
            loader: 'postcss-loader',
            options: {
              plugins: () => [flexbugs, precss, autoprefixer],
            },
          },
          'sass-loader',
        ],
      },
      {
        test: /(\.jsx|\.js)$/,
        use: [
          'babel-loader',
        ],
        exclude: /(node_modules|bower_components)/,
      },
      {
        test: /\.svg$/,
        use: ['babel-loader', 'react-svg-loader'],
      },
    );
  }
  return storybookBaseConfig;
};
*/
