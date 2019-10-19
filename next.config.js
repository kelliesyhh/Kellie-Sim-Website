const debug = process.env.NODE_ENV !== 'production';
const webpack = require ('webpack');
const assetPrefix = !debug
  ? 'https://kelliesyhh-io.github.io/Kellie-Sim-Website/'
  : '';

// module.exports = () => {
/* eslint-disable */
// const withLess = require('@zeit/next-less')
// const lessToJS = require('less-vars-to-js')
// const fs = require('fs')
// const path = require('path')
// // Where your antd-custom.less file lives
// const themeVariables = lessToJS(
//   fs.readFileSync(path.resolve(__dirname, './assets/antd-custom.less'), 'utf8')
// )
// // fix: prevents error when .less files are required by node
// if (typeof require !== 'undefined') {
//   require.extensions['.less'] = file => {}
// }
// return withLess({
//   lessLoaderOptions: {
//     javascriptEnabled: true,
//     modifyVars: themeVariables // make your antd custom effective
//   }
// })
module.exports = {
  exportPathMap: () => ({
    '/': {page: '/'},
    '/page1': {page: '/page1'},
  }),
  assetPrefix: assetPrefix,
  webpack: config => {
    config.plugins.push (
      new webpack.DefinePlugin ({
        'process.env.ASSET_PREFIX': JSON.stringify (assetPrefix),
      })
    );

    return config;
  },
};
