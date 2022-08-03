let Home = () => import(/* webpackChunkName: "mainSystem" */ '@/projects/projectA/views/Home')
export default [
  {
    path: '/aa',
    name: 'Home',
    component: Home,
    children: [{path: 'cc', name: 'cc', component: () => import('@/projects/projectA/views/CC')}]
  }
]
