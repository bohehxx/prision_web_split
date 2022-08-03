import Vue from 'vue'
import VueRouter from 'vue-router'

//引入主系统路由path.js
import mainRouter from '@/projects/mainSystem/router/path.js' //导入主系统路由文件

//引入其他子系统path.js
import projectARouter from '@/projects/projectA/router/path.js' //导入子系统路由文件

Vue.use(VueRouter)
//合并路由（将需要的路由进行合并）

let routes = new Set([...mainRouter, ...projectARouter])
console.log(routes, 'routes')
const router = new VueRouter({
  mode: 'hash',
  base: process.env.BASE_URL,
  routes
})
//解决路由导航冗余报错（路由重复）
const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}
export default router
