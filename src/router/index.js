import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/components',
    name: 'Components',
    component: () => import(/* webpackChunkName: "p-components" */ '../views/Components.vue')
  },
  {
    path: '/router',
    name: 'Router',
    component: () => import(/* webpackChunkName: "p-router" */ '../views/Router.vue')
  },
  {
    path: '/vuex/:genre?',
    name: 'Vuex',
    component: () => import(/* webpackChunkName: "p-vuex" */ '../views/Vuex.vue')
  },
  {
    path: '*',
    name: 'Error',
    component: () => import(/* webpackChunkName: "p-components" */ '../views/Error.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
