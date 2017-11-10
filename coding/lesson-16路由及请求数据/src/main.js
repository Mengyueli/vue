// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
// es6语法
import Vue from 'vue'
// 安装路由：1. npm install vue-router --save-dev
// 2.引入路由模块(项目的跳转用路由，速度快)
import VueRouter from 'vue-router'
import App from './App'
//引入
import VueResouce from 'vue-resource'

//引入抽离的路由
import Routes from './routes'

Vue.config.productionTip = false
//3.使用路由模块
Vue.use(VueRouter)
//使用路由请求模块
Vue.use(VueResouce)

//4.配置路由
//5.router粘贴到el上面
//6.home.vue就是新的父组件
//7.app.vue中添加标签 <router-view></router-view>
const router = new VueRouter({
	// 路由们
	routes:Routes,
	//抽离部分
	// [

		// // path：/就代表根路径 component:要跳转到的组件里
		// {path:"/",component:Home},
		// {path:"/test",component:Test}
	// ],
	//去掉地址栏里的#号
	mode:"history"
})

/* eslint-disable no-new */
new Vue({
	router,
  el: '#app',
  template: '<App/>',
  components: { App }
})

/*
	Vue-Resource
	1.npm install vue-resource --save-dev()

*/