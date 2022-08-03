const config = {
  //主系统
  mainSystem: {
    pages: {
      index: {
        entry: 'src/projects/mainSystem/main.js',
        template: 'public/index.html',
        filename: 'index.html'
      }
    },
    devServer: {
      port: 8081, // 端口地址
      open: false, // 是否自动打开浏览器页面
      host: '0.0.0.0', // 指定使用一个 host，默认是 localhost
      https: false, // 使用https提供服务
      disableHostCheck: true
    }
  },
  //子系统A
  projectA: {
    pages: {
      index: {
        entry: 'src/projects/projectA/main.js',
        template: 'public/index.html',
        filename: 'index.html'
      }
    },
    devServer: {
      port: 8080, // 端口地址
      open: false, // 是否自动打开浏览器页面
      host: '0.0.0.0', // 指定使用一个 host，默认是 localhost
      https: false, // 使用https提供服务
      disableHostCheck: true
    }
  }
}
module.exports = config
