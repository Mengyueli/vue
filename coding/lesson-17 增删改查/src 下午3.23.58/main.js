
import Vue from 'vue'
import App from './App'
import VueRouter from  'vue-router'
import Customers from './components/Customers'
import About from './components/About'
//引入
import VueResource from 'vue-resource'
import Add from './components/Add'
import Profile from './components/Profile'

Vue.config.productionTip = false
//使用路由
Vue.use(VueRouter)
Vue.use(VueResource)


//配置路由
const router = new VueRouter({
  routes:[
    {path:"/",component:Customers},
    {path:"/about",component:About},
    {path:"/add",component:Add},
    {path:"/profile",component:Profile}

],
  mode:"history",
  //根路径 __dirname + ''
  base:__dirname
})

new Vue({
  router,
  el:"#app",
  template:"<App/>",
  components:{ App }
})
