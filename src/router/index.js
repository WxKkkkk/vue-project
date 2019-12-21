import Vue from 'vue'
import VueRouter from 'vue-router'
// import Lecun from '@/views/lecun'

Vue.use(VueRouter)

const routes = [
  {
    path: '*',
    component: () => import('@/views/lecun')
  },
  {
    path: '/lecun',
    component: () => import('@/views/lecun')
  },
  {
    path: '/category',
    component: () => import('@/views/Category')
  },
  {
    path: '/cart',
    component: () => import('@/views/Cart')
  },
  {
    path: '/center',
    component: () => import('@/views/Center')
  },
  {
    path: '/detail',
    component: () => import('@/views/Detail')
  },
  {
    path: '/login',
    component: () => import('@/views/Login')
  },
  {
    path: '/regist',
    component: () => import('@/views/Regist')
  },
  {
    path: '/province',
    component: () => import('@/views/Province'),
    children: [
      {
        path: '/province/city',
        component: () => import('@/views/Province/city')
      }
    ]
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
