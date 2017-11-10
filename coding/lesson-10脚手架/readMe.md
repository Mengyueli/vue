# 脚手架是是通过webpack搭建的开发环境
# 使用es6语法
# 打包和压缩js为一个文件
# 项目文件在环境中编译，而不是在浏览器
# 实现页面自动更新

#01.安装node.js
#02.# 全局安装 vue-cli
	$ sudo cnpm install --global vue-cli
#03.新建文件夹，cd到文件夹
# 创建一个基于 webpack 模板的新项目
	$ vue init webpack 项目名
	Project name 直接enter
	后面的都不安装

# 安装依赖，走你
	$ cd my-project
	$ npm install

	$ npm run dev自动生成端口号8080
	#修改端口号build-

### 要引用组件的话：
    1.import 组件名字 from 文件路径
      import HelloWorld from './components/HelloWorld'

    2.export default里的components里写上组件的名字
      export default {
        name: 'app',
        // components: {
        //   HelloWorld
        // }
      }
    3.template的div里加上组件的标签 <HelloWorld/>
      <template>
      <div id="app">
        <img src="./assets/logo.png">
        <HelloWorld/>
      </div>
    </template>
### .vue结尾的都是组件,每一个组件里都有<template></template> <script></script> <style></style>
	根组件里App.vue
