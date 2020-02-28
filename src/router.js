import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

import CKD from './views/CKD.vue'
import Stroke from './views/Stroke.vue'
import CoronaEMS from './views/CoronaEMS.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/ckd',
      name: 'ckd',
      component: CKD
    },
    {
      path: '/stroke',
      name: 'stroke',
      component: Stroke
    },
    {
      path: '/corona_ems',
      name: 'corona_ems',
      component: CoronaEMS
    }      
  ]
})
