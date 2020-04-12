import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path:'/login',
    name: 'Login',
    component:()=>import('../views/Login.vue')
  },
  {
    path: '/register',
    name: 'Register',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Register.vue')
  },
  {
    path:'/testbank',
    name: 'TestBank',
    component:()=>import('../views/TestBank.vue')
  },
  {
    path:'/problem',
    name: 'Problem',
    component:()=>import('../views/Problem.vue')
  },
  {
    path:'/responder',
    name: 'Responser',
    component:()=>import('../views/Responder.vue')
  },

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
