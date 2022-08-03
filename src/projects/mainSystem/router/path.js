/**
 * 主系统路由地址
 * @returns {Promise<*>|*}
 */
let firstPageIndex = () => import(/* webpackChunkName: "firstPageIndex" */ '@/projects/mainSystem/views/index')
let mainHome = () => import(/* webpackChunkName: "mainHome" */ '@/projects/mainSystem/views/Home')
let mainLayout = () => import(/* webpackChunkName: "mainLayout" */ '@/components/base/publicLayout')

export default [
  {
    path: '/home',
    name: 'home',
    component: mainHome,
    children: [
      {
        path: 'mainSystem',
        name: 'mainSystem',
        component: firstPageIndex
        // meta: {
        //   isFork: false,
        //   hideHeader: false,
        //   notPadding: true
        // }
      }
    ]
  },
  {
    path: '/mainSystem-layout',
    name: 'mainSystem-layout',
    component: mainLayout
  }
]
