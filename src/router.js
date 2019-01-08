import Vue from 'vue'
import Router from 'vue-router'
import Profiles from './views/Profiles.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'profiles',
      component: Profiles
    },
    {
      path: '/hunting',
      name: 'hunting',
      component: () => import('./views/JobHunting.vue')
    },
    {
      path: '/cv',
      name: 'cv',
      component: () => import('./views/CurriculumVitae.vue')
    },
    {
      path: '/skills',
      name: 'skills',
      component: () => import('./views/Skills.vue')
    },
    {
      path: '/portfolios',
      name: 'portfolios',
      component: () => import('./views/Portfolios.vue')
    },
    {
      path: '/achievements',
      name: 'achievements',
      component: () => import('./views/Achievements.vue')
    }
  ]
})
