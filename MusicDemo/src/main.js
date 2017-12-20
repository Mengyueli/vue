import Vue from 'vue'
import App from './App'
//路由
import VueRouter from 'vue-router'
//数据请求要用到的模块
import VueResource from 'vue-resource'
//md5加密
// import crypto from 'crypto'
//axios
import axios from "axios"
//vue-jsonp
import VueJsonp from "vue-jsonp"

import Register from './components/RegisterPage';
import Login from './components/LoginPage';
import Home from './components/HomePage';
import Recommand from './components/recommandMusic';
import Hot from './components/hotMusic';
import Search from './components/searchMusic';
import Detail from './components/detailMusic'; 


Vue.config.productionTip = false

Vue.use(VueRouter) 
Vue.use(VueResource)
Vue.use(VueJsonp)
Vue.prototype.$axios = axios

const router = new VueRouter({
	routes:[
		{
			path:"/",
			component:Home,
			children:[
				{path:"/recommand",component:Recommand},
				{path:"/hot",component:Hot},
				{path:"/search",component:Search}
			]
		},
		{path:"/register",component:Register},
		{path:"/login",component:Login},
		{path:"/detail/:id",component:Detail},
		
	],
	mode:"history",
  	base:__dirname
})

/* eslint-disable no-new */
new Vue({
	router,
	el: '#app',
	template: '<App/>',
	components: { App }
})
