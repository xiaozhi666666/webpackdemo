const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin'); // 用于处理 js 的压缩和混淆
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin'); //压缩css文件
const { merge } = require('webpack-merge');
const ConfigInit = require('./webpack.config.js');

module.exports = merge(ConfigInit('production'), {
  plugins: [new CleanWebpackPlugin()],
  optimization: {
    splitChunks: {
      chunks: 'all',
    },
    runtimeChunk: {
      name: 'mainifels',
    },
    minimize: true,
    minimizer: [new TerserPlugin(), new CssMinimizerPlugin()],
  },
  performance: {
    hints: false,
    maxAssetSize: 4000000, // 整数类型（以字节为单位）
    maxEntrypointSize: 5000000, // 整数类型（以字节为单位）
  },
});
