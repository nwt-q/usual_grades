import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)
//定义路由表 ? 懒加载 : 路由守卫 ? 重定向
const routes = [
  {
    path: '/',
    redirect:'/home',
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('../views/LoginView.vue')
  },
  {
    path: '/admin',
    name: 'admin',
    component: () => import('../views/AdminView.vue')
  },
  {
    path: '/admin/data',
    name: 'data',
    component: () => import('../views/AdminView.vue')
  },
  {
    path: '/home',
    name: 'home',
    component: () => import('../views/home/HomeView.vue')
  },
  {
    path: '/home/todolist',
    name: 'todolist',
    component: () => import('../views/home/TodoListView.vue')
  }
]

const router = new VueRouter({
  mode: 'history',    // 路由模式，该模式不会在地址中显示井号#
  routes
})

export default router
