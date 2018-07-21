import Vue from 'vue'
import Router from 'vue-router'
import index from '@/components/index'
import login from '@/components/login'
import register from '@/components/register'
import info from '@/components/info'
import trade from '@/components/trade'
import order from '@/components/order'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: index
    },
    {
      path: '/login',
      name: 'login',
      component: login
    },
    {
      path: '/register',
      name: 'register',
      component: register
    },
    {
      path: '/info',
      name: 'info',
      component: info
    },
    {
      path: '/trade',
      name: 'trade',
      component: trade
    },
    {
      path: '/order',
      name: 'order',
      component: order
    }
  ]
})
