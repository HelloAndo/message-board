import Vue from 'vue'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'
import App from './App'
import Home from './components/Home'

Vue.use(VueResource).use(VueRouter)

const router = new VueRouter()

// 路由map
router.map({
  '/home': {
    component: Home
  }
})

router.redirect({
  '*': '/home'
})

router.start(App, '#app')
