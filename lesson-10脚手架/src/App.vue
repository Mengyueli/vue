<!-- template:使我们需要用的模板,模板中有且只能有一个跟标签-->
<template>
  <div id="app">
    <!-- <img src="./assets/logo.png"> -->
    <!-- <HelloWorld/> -->
    <h1>{{title}}</h1>
    <p>{{greeting()}}</p>
  </div>
</template>

<!-- 行为script：标签中囊括的是所有的属性和方法 
      export default{}:对外公开当前文件，可被其他文件引入
      name:给当前组件起名，此名字可以在其他组件中以标签的形式调用
      components：承载所有当前组件需要依赖的其他组件
      style:样式
-->
<script>
// import HelloWorld from './components/HelloWorld'

export default {
  name: 'app',
  // components: {
  //   HelloWorld
  // }
  data(){
    return{
      title:"this is our first cli project"
    }
  },
  methods:{
    greeting:function(){
      return "Hello Vue.js!";
    }
  }
}
</script>

<style>

</style>

