import Vue from 'vue'
import Router from 'vue-router'
import index from '@/components/index'
import login from '@/components/login'
import arrangement from '@/components/arrangement'
import detail from '@/components/detail'
import cities from '@/components/cities'
import discover from '@/components/discover'
import score from '@/components/score'
import popularity from '@/components/popularity'
import liveRadio from '@/components/liveRadio'
import publish from '@/components/publish'
import MokaPublish from '@/components/MokaPublish'
import MokaDetail from '@/components/MokaDetail'
import popularityRank from '@/components/popularityRank'
import rules from '@/components/rules'
import announcement from '@/components/announcement'
import realName from '@/components/realName'

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
    {
      path: '/publish',
      name: 'publish',
      component: publish
    },
    {
      path: '/MokaDetail',
      name: 'MokaDetail',
      component: MokaDetail
    },
    {
      path: '/MokaPublish',
      name: 'MokaPublish',
      component: MokaPublish
    },
    {
      path: '/popularityRank',
      name: 'popularityRank',
      component: popularityRank
    },
    {
      path: '/rules',
      name: 'rules',
      component: rules
    },
    {
      path: '/announcement',
      name: 'announcement',
      component: announcement
    },
    {
      path: '/realName',
      name: 'realName',
      component: realName
    }
  ]
})
