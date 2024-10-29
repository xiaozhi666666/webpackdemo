const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = (mode) => {
  const isPro = mode === 'production';
  // 样式的数组的
  const cssLoaderAry = [
    isPro ? MiniCssExtractPlugin.loader : 'style-loader',
    'css-loader',
    'postcss-loader',
  ];
  return {
    target: 'web',
    mode,
    entry: path.resolve(__dirname, '/src/index.tsx'),
    output: {
      filename: isPro ? 'js/[name].[chunkhash:8].js' : '[name].[hash:8].js',
      path: path.resolve(__dirname, '../dist'),
    },
    plugins: [
      new MiniCssExtractPlugin({
        filename: isPro ? 'css/[name].[contenthash:8].css' : 'css/[name].css',
      }),
      new HtmlWebpackPlugin({
        title: '项目',
        filename: 'index.html',
        template: path.resolve(__dirname, '/config/index.ejs'),
        hash: true,
        cache: false,
        inject: true,
        minify: {
          removeComments: true,
          removeAttributeQuotes: true,
          collapseWhitespace: true,
          minifyJS: true,
          minifyCSS: true, // 缩小CSS样式元素和样式属性
        },
        nodeModules: path.resolve(__dirname, '/node_modules'),
      }),
    ],
    module: {
      rules: [
        {
          test: /\.(png|svg|jpg|gif)$/,
          type: 'asset/resource',
        },
        {
          test: /\.(woff|woff2|eot|ttf|otf)$/,
          type: 'asset/resource',
        },
        {
          test: /\.css$/,
          use: cssLoaderAry,
        },
        {
          test: /\.less$/i,
          use: [
            ...cssLoaderAry,
            {
              loader: 'less-loader',
              options: {
                lessOptions: {
                  exclude: /node_modules/,
                  javascriptEnabled: true,
                },
              },
            },
          ],
        },
        {
          test: /\.(ts|tsx|js|jsx)$/,
          exclude: /(node_modules|bower_components)/,
          use: [
            'thread-loader',
            {
              loader: 'babel-loader',
              options: {
                cacheDirectory: true,
                presets: ['@babel/preset-env'],
                plugins: ['@babel/plugin-transform-runtime'],
              },
            },
          ],
        },
      ],
    },
    resolve: {
      extensions: ['.tsx', '.js', '.jsx', '.ts', '.less', '.css'],
      alias: {
        '@assets': path.resolve(__dirname, '/src/assets'),
        '@': path.resolve(__dirname, '/src'),
      },
    },
  };
};
