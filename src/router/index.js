import Vue from 'vue'
import VueRouter from 'vue-router'
// import Lecun from '@/views/lecun'
import City from '@/views/Provinces/City'
Vue.use(VueRouter)

const routes = [
  {
    path: '*',
    redirect: '/lecun'
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
    path: '/cartsss',
    component: () => import('@/views/Cart')
  },
  {
    path: '/center',
    component: () => import('@/views/Center')
  },
  {
    path: '/detail/:goodsid',
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
    path: '/setup',
    component: () => import('@/views/Setup')
  },
  {
    path: '/retphone',
    component: () => import('@/views/Retphone')
  },
  {
    path: '/province',
    component: () => import('@/views/Province')
  },
  {
    path: '/city',
    component: City
  },
  {
    path: '/categorydetails',
    name: 'CategoryDetails',
    component: () => import('@/views/CategoryDetails')
  },
  {
    path: '/SearchPrepare',
    name: '/SearchPrepare',
    component: () => import('@/views/SearchPrepare')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
