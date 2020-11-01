import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

import CKD from './views/CKD.vue'
import NEWS from './views/NEWS.vue'
import Stroke from './views/Stroke.vue'
import CoronaEMS from './views/CoronaEMS.vue'
import CoronaHospital from './views/CoronaHospital.vue'
import CoronaSociety from './views/CoronaSociety.vue'
import CoronaOutpatient from './views/CoronaOutpatient.vue'
import About from './views/About.vue'

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
      path: '/news',
      name: 'news',
      component: NEWS
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
    },
    {
      path: '/corona_hospital',
      name: 'corona_hospital',
      component: CoronaHospital
    },
    {
      path: '/corona_society',
      name: 'corona_society',
      component: CoronaSociety
    },
    {
      path: '/corona_outpatient',
      name: 'corona_outpatient',
      component: CoronaOutpatient
    },
    {
      path: '/about',
      name: 'about',
      component: About
    }        
  ]
})
