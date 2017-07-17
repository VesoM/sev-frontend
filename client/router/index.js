import Vue from 'vue'
import Router from 'vue-router'
import Home from '../views/Home'
import Main from '../views/Main'
import Login from '../views/Login'

Vue.use(Router)

export default new Router({
  mode: 'hash',
  routes: [
    {
      path: '/',
      component: Home,
      meta: {
        forVisitors: true
      }
    },
    {
      path: '/login',
      component: Login,
      meta: {
        forVisitors: true
      }
    },
    {
      path: '/main',
      component: Main
    }
  ]
})
