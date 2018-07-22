import Vue from 'vue'
import Router from 'vue-router'
import index from '@/components/index'
import login from '@/components/login'
<<<<<<< HEAD
import arrangement from '@/components/arrangement'
import detail from '@/components/detail'
import cities from '@/components/cities'
import discover from '@/components/discover'
import score from '@/components/score'
import popularity from '@/components/popularity'
import liveRadio from '@/components/liveRadio'

=======
import register from '@/components/register'
import info from '@/components/info'
import trade from '@/components/trade'
import order from '@/components/order'
>>>>>>> 299f3332ca3c7b9f60c43f4e042f43a104b0da2b
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
<<<<<<< HEAD
      path: '/arrangement',
      name: 'arrangemnet',
      component: arrangement
    },
    {
      path: '/detail',
      name: 'detail',
      component: detail
    },
    {
      path: '/cities',
      name: 'cities',
      component: cities
    },
    {
      path: '/discover',
      name: 'discover',
      component: discover
    },
    {
      path: '/score',
      name: 'score',
      component: score
    },
    {
      path: '/popularity',
      name: 'popularity',
      component: popularity
    },
    {
      path: '/liveRadio',
      name: 'liveRadio',
      component: liveRadio
=======
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
>>>>>>> 299f3332ca3c7b9f60c43f4e042f43a104b0da2b
    }
  ]
})
