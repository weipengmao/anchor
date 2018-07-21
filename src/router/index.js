import Vue from 'vue'
import Router from 'vue-router'
import index from '@/components/index'
import login from '@/components/login'
import arrangement from '@/components/arrangement'
import detail from '@/components/detail'
import cities from '@/components/cities'
import discover from '@/components/discover'

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
    }
  ]
})
