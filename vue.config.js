module.exports = {
  // start::本地开发服务器
  devServer: {
    host: 'localhost',
    port: 8080,
    proxy: {
      '/api': {
        target: 'http://mall-pre.springboot.cn',
        changeOrigin: true,
        pathRewrite: {
          '/api': ''
        }
      }
    }
  },
  // end::本地开发服务器

  // publicPath: '/', // 根路径, 前身是baseUrl, 示例可查看有道云笔记

  // outputDir: 'dist', // 打包的输出路径

  // indexPath: 'index.html', // 有默认选项: index.html

  productionSourceMap: true, // 决定是否有 js.map文件

  // lintOnSave: false, // 关闭eslint

  chainWebpack: (config)=>{
    config.plugins.delete('prefetch') // 删除预加载所有的js文件
  }
};