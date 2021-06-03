// vue.config.js
module.exports = {
  // 选项...
  // 项目部署的基础路径
  publicPath: './',

  // 将构建好的文件输出到哪里（或者说将编译的文件）
  outputDir: 'dist',

  // 静态资源文件输出到哪里
  assetsDir: 'static'

  // devServer: {
  //   // 局域网和本地访问
  //   host: '0.0.0.0',
  //   port: '8080',
  //   hot: true,
  //   // 自动打开浏览器
  //   open: false,
  //   overlay: {
  //     warning: false,
  //     error: true
  //   },
  //   // 跨域代理
  //   proxy: {
  //     '/api': {
  //       // 目标代理服务器地址
  //       target: 'http://m260048y71.zicp.vip',
  //       // 允许跨域
  //       changeOrigin: true,
  //       pathRewrite: {
  //         '^/api': ''
  //       }
  //     }
  //   }
  // }
}
