const ConfigInit = require('./webpack.config.js');

// 开发环境的配置文件
const config = ConfigInit('development');

const host = '127.0.0.1';
const port = '8081';

module.exports = {
  ...config,
  devServer: {
    headers: { 'Access-Control-Allow-Origin': '*' },
    hot: true, // 热更新
    host: host, // 地址
    port: port, // 端口
    open: true,
  },
};
