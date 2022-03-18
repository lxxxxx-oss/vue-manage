import Vue from 'vue'
import VueRouter from 'vue-router'
// import Home from '../views/Home.vue'

Vue.use(VueRouter)

//获取原型对象上的push函数
const originalPush = VueRouter.prototype.push
//修改原型对象中的push方法
VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}

const routes=[
  {
    path:'/',
    name:'Main',
    component:()=>import ('../views/Main.vue'),
    children:[]
  },
  {
    path:'/login',
    name:'login',
    component:()=>import('../views/login/login.vue')
  },
]
const router=new VueRouter({
  path: '/home',
  mode:'history',
  routes

})
export default router


