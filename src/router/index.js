import Vue from 'vue'
import Router from 'vue-router'

// import HelloWorld from '@/components/HelloWorld'
import recommend from '@/components/page/recommend'
import rank from '@/components/page/rank'
import search from '@/components/page/search'
import home from '@/components/home'
import songDetail from '@/components/detail/songDetail'
import play from '@/components/detail/play'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/home',
      name: 'home',
      component: home,
      children:[
        {
          path: '/recommend',
          name: 'recommend',
          component: recommend
        },
        {
          path: '/rank',
          name: 'rank',
          component: rank
        },
        {
          path: '/search',
          name: 'search',
          component: search
        },
        {
          path: '/play',
          name: 'play',
          component: play
        },
      ]
    },
    {
      path: '/songDetail',
      name: 'songDetail',
      component: songDetail
    },
    
    {
      path:'*',
      redirect:'/recommend'
    }

    /* {
      path: '/recommend',
      name: 'recommend',
      component: recommend
    },
    {
      path: '/rank',
      name: 'rank',
      component: rank
    },
    {
      path: '/search',
      name: 'search',
      component: search
    }, */
  ]
})
