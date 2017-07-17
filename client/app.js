import Vue from 'vue'
import { sync } from 'vuex-router-sync'
import App from './components/App'
import router from './router'
import store from './store'
import axios from 'axios'
import Auth from './packages/auth/Auth.js'

sync(store, router)
Vue.use(Auth)
router.beforeEach(
  (to, from, next) => {
    if(to.matched.some(record => record.meta.forVisitors)){
      if(Vue.auth.isAuthenticated()){
        next({
          path: '/main'
        })
      }else{
        next()
      }
    }else{
      if(Vue.auth.isAuthenticated()){
        next()
      }else{
        next({
          path: '/login'
        })
      }
    }
  }
)
Vue.prototype.$http = axios
const app = new Vue({
  router,
  store,
  ...App
})

export { app, router, store }
