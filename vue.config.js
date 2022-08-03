//多子系统分模块打包
const config = require('./config/projectsConfig.js')
let projectName = process.env.PROJECT_NAME

module.exports = {
  ...config[projectName]
}
