- npm 不只是包管理器，yarn
工作流里的重要法则，
使用npm run scripts,命令工作流程
- webpack 
  bundler 打包器
  传统的前端html css js 文件
  这只是半成品，why？现代前端讲究开发工艺
  打包成一个bundle
  css 编译，压缩，
  js babel es6789->es5 编译压缩
  html template
  最后形成一个可以发布的产品，webpack，可以打包一切静态资源
  webpack-cli 负责接收命令 cli:命令行
  webpack-dev-server: 类似于Live-server 启动静态服务器
  node_modules:安装后包所在的位置

- 项目有多重环境
  一个项目有多份代码
  start development 开发环境 代码环境 一般在本地 启动的localhost
  test 测试环境 一般在局域网内，公司内部测试，内网IP地址
  npm run test
  build --mode production compressed 生产环境 线上环境，服务器端环境 域名对应的服务器或集群