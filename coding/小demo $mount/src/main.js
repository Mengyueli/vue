
import Vue from 'vue'
import App from './App'
import VueRouter from  'vue-router'
import Customers from './components/Customers'
import About from './components/About'

Vue.config.productionTip = false
//使用路由
Vue.use(VueRouter)

//配置路由
const router = new VueRouter({
  routes:[
    {path:"/",component:Customers},
    {path:"/about",component:About}
],
  mode:"history",
  //根路径 __dirname + ''
  base:__dirname
})

new Vue({
  router,
  template:`
  <div>
    <ul>
      <li>
        <router-link to="/">主页</router-link>
       </li>
       <li>
        <router-link to="/about">关于</router-link>
       </li>
    </ul>
    <!--路由的内容归属-->
    <router-view></router-view>
</div>
  `,
}).$mount("#app")
