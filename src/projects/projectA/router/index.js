import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import CC from '../views/CC.vue'
Vue.use(VueRouter)

const routes = [
  {
    path: '/aa',
    name: 'Home',
    component: Home,
    children: [{path: 'cc', name: 'cc', component: CC}]
  }
]

const router = new VueRouter({
  routes
})

export default router
