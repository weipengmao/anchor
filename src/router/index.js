import Vue from 'vue'
import Router from 'vue-router'
import index from '@/components/index'
import login from '@/components/login'
import register from '@/components/register'
import info from '@/components/info'
import trade from '@/components/trade'
import order from '@/components/order'
import optimization from '@/components/optimization'
import recommend from '@/components/recommend'
import shop from '@/components/shop'
import list from '@/components/list'
import optIndex from '@/components/optIndex'
import center from '@/components/center'
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
    },
    {
      path: '/optimization',
      name: 'optimization',
      component: optimization,
      children: [
        {
          path: '/',
          name: 'optIndex',
          component: optIndex,
          children:[
            {
              path: '/',
              name: 'center',
              component: center,
            }
          ]
        },
        {
          path: '/shop',
          name: 'shop',
          component: shop
        },
        {
          path: '/recommend',
          name: 'recommend',
          component: recommend
        },
        {
          path: '/list',
          name: 'list',
          component: list
        },
      ]
    },
  ]
})
