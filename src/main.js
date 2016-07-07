import Vue from 'vue'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'
import App from './App'
import Home from './components/Home'

Vue.use(VueResource).use(VueRouter)

Vue.http.options.root = 'http://192.168.131.45:3000';
Vue.http.options.emulateJSON = true;
Vue.http.options.credentials = true ;


const router = new VueRouter()

// 路由map
router.map({
  '/home': {
    component: Home,

  }
})

router.redirect({
  '*': '/home'
})

router.start(App, '#app')