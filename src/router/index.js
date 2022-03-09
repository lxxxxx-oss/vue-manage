import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path:'/',
    name:'Main',
    component: () => import('../views/Main'),
    children: [
      {
        path: '/home',
        name: 'home',
        component: () => import('../views/home/index')
      },
      {
        path:'/user',
        name:'user',
        component: () => import('../views/User/index')
      }
    ]
  },
]

const router = new VueRouter({
  mode: 'history',
  routes
})

export default router
