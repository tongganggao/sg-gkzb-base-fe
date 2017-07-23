var configs = require('./webpack.base.config'),
    path = require('path'),
    webpack = require('webpack');
var merge = require('webpack-merge')
var plugins=require('./plugins.js')
configs.forEach(function(config){
  config.plugins = config.plugins.concat(plugins.dev(config.language))
  config.devtool = 'eval-source-map'
  config.devServer = {
    noInfo: true,
    hot: true,
    inline: true,
    outputPath: path.join(__dirname, 'dist'),
    proxy: {
      '/yuncai': {
        target: 'http://yc.yonyou.com',
        secure: false,
        changeOrigin: true,
        host: "yc.yonyou.com"
      },
      '/cpu-project-def': {
        target: 'http://yc.yonyou.com',
        // target:'http://10.1.80.32:8090',
        secure: false,
        changeOrigin: true,
        host: "yc.yonyou.com"
      },
      '/regist': {
        target: 'http://127.0.0.1:3000',
        // target:'http://10.1.80.32:8090',
        secure: false,
        changeOrigin: true,
        host: "yc.yonyou.com"
      },
      '/expertDemo': {
          //target: 'http://10.1.80.51:1426',
          //target: 'http://172.20.4.66:9926',
          target: 'http://127.0.0.1:3000',
          secure: false,
          changeOrigin: true,
          host: 'yc.yonyou.com'
          //host: '10.1.80.51',
      },
      '/personinfo': {
          //target: 'http://10.1.80.51:1426',
          //target: 'http://172.20.4.66:9926',
          target: 'http://127.0.0.1:8080',
          secure: false,
          changeOrigin: true,
          host: 'yc.yonyou.com'
          //host: '10.1.80.51',
      },
      '/sg-gkzb-expert': {
        target: 'http://127.0.0.1:8086',
        secure: false,
        changeOrigin: true,
        host: 'yc.yonyou.com'
      },
      '/sg-business-gkzb-releasebid': {
          target: 'http://127.0.0.1:8081',
          secure: false,
          changeOrigin: true,
          host: 'yc.yonyou.com'
          //host: '10.1.80.51',
      },
      '/sg-gkzb-biddecision': {
          target: 'http://127.0.0.1:8085',
          secure: false,
          changeOrigin: true,
          host: 'yc.yonyou.com'
          //host: '10.1.80.51',
      },
      '/sg-basedoc-basedata': {
        // target: 'http://rapapi.org/mockjsdata/15571',
        target:'https://123.103.9.208:9090',
        // target: 'http://127.0.0.1:8081',
        secure: false,
        changeOrigin: true,
        host: "yc.yonyou.com"
      },
      '/sg-basedoc-orgrights': {
        target: 'http://127.0.0.1:8081',
        // target:'http://172.20.12.15:90',
        // target: 'https://123.103.9.208:9090',
        secure: false,
        changeOrigin: true,
        host: "yc.yonyou.com"
      },
      '/sg-basedoc-material': {
        // target: 'http://rapapi.org/mockjsdata/15571',
        target:'http://172.20.12.15:90',
        secure: false,
        changeOrigin: true,
        host: "yc.yonyou.com"
      },
      '/sg-basedoc-supplier': {
        // target: 'http://rapapi.org/mockjsdata/15571',
        target:'http://127.0.0.1:8081',
        secure: false,
        changeOrigin: true,
        host: "yc.yonyou.com"
      },
      '/sg-gkzb-expert': {
        target: 'http://127.0.0.1:8086',
        secure: false,
        changeOrigin: true,
        host: 'yc.yonyou.com'
      },
      '/sg-gkzb-releasebid': {
          target: 'http://127.0.0.1:8081',
          secure: false,
          changeOrigin: true,
          host: 'yc.yonyou.com'
          //host: '10.1.80.51',
      },
      '/sg-business-gkzb-bidopen': {
          target: 'http://127.0.0.1:8081',
          secure: false,
          changeOrigin: true,
          host: 'yc.yonyou.com'
          //host: '10.1.80.51',
      },
      '/sg-business-gkzb-batch': {
          target: 'https://123.103.9.208:9090',
          secure: false,
          changeOrigin: true,
          host: 'yc.yonyou.com'
          //host: '10.1.80.51',
      },
      '/sg-business-gkzb-bid': {
          target: 'http://123.103.9.208:9090',
          secure: false,
          changeOrigin: true,
          host: 'yc.yonyou.com'
          //host: '10.1.80.51',
      },
      '/sg-business-gkzb-tender': {
          target: 'https://123.103.9.208:9090',
          secure: false,
          changeOrigin: true,
          host: 'yc.yonyou.com'
          //host: '10.1.80.51',
      },
      '/sg-business-gkzb-supplybid': {
          target: 'https://127.0.0.1:8081',
          secure: false,
          changeOrigin: true,
          host: 'yc.yonyou.com'
          //host: '10.1.80.51',
      },

      '/sg-business-gkzb-winbid': {
          target: 'http://127.0.0.1:8081',
          secure: false,
          changeOrigin: true,
          host: 'yc.yonyou.com'
          //host: '10.1.80.51',
      },
      '/sg-business-gkzb-expertmanager': {
          target: 'http://127.0.0.1:8081',
          secure: false,
          changeOrigin: true,
          host: 'yc.yonyou.com'
          //host: '10.1.80.51',
      },
      '/sg-business-gkzb-prewinbid': {
          target: 'http://127.0.0.1:8081',
          secure: false,
          changeOrigin: true,
          host: 'yc.yonyou.com'
          //host: '10.1.80.51',
      },
      '/sg-system-file': {
          target: 'https://123.103.9.208:9090',
          secure: false,
          changeOrigin: true,
          host: 'yc.yonyou.com'
          //host: '10.1.80.51',
      },
      '/sg-system-bpm': {
          target: 'https://123.103.9.208:9090',
          // target: 'http://127.0.0.1:8082',
          secure: false,
          changeOrigin: true,
          host: 'yc.yonyou.com'
          //host: '10.1.80.51',
      },
      '/sg-business-gkzb-scorerule': {
          target: 'http://123.103.9.208:9090',
          secure: false,
          changeOrigin: true,
          host: 'yc.yonyou.com'
          //host: '10.1.80.51',
      },
      '/sg-business-gkzb-score': {
          target: 'http://127.0.0.1:8281',
          secure: false,
          changeOrigin: true,
          host: 'yc.yonyou.com'
          //host: '10.1.80.51',
      },
      '/sg-business-gkzb-pricescore': {
          target: 'http://127.0.0.1:8282',
          secure: false,
          changeOrigin: true,
          host: 'yc.yonyou.com'
          //host: '10.1.80.51',
      },
      '/sg-business-gkzb-initscore': {
          target: 'http://127.0.0.1:8081',
          secure: false,
          changeOrigin: true,
          host: 'yc.yonyou.com'
          //host: '10.1.80.51',
      },
      '/sg-system-bpm': {
          target: 'https://123.103.9.208:9090',
          secure: false,
          changeOrigin: true,
          host: 'yc.yonyou.com'
          //host: '10.1.80.51',
      },
    }
  }
  config = merge(config, {
    plugins: [
      // https://github.com/glenjamin/webpack-hot-middleware#installation--usage
      new webpack.optimize.OccurenceOrderPlugin(),
      new webpack.HotModuleReplacementPlugin(),
      new webpack.NoErrorsPlugin()
      // https://github.com/ampedandwired/html-webpack-plugin
    ]
  })
})


module.exports = configs
