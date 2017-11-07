<!-- template:使我们需要用的模板,模板中有且只能有一个根标签-->
<template>
  <div id="app">
    <h1>Hello App</h1>
    <sbqusers></sbqusers> 

  </div>
</template>

<!-- 行为script：标签中囊括的是所有的属性和方法 
      export default{}:对外公开当前文件，可被其他文件引入
      name:给当前组件起名，此名字可以在其他组件中以标签的形式调用
      components：承载所有当前组件需要依赖的其他组件
      style:样式
-->
<script>
//引入users组件
import Users from "./components/Users"

export default {
  name: 'app',
  components: {
    // 与标签名字相同users:Users
    "sbqusers":Users
    // Users
  },
  data(){
    return{
      
    }
  },
  methods:{
    
  }
}
</script>
<!-- 总结：
  组件嵌套：至少有两个组件，（包括根组件） 
  全局组件：需要在main.js中注册，注册后可以在任何有关连的组件中使用
  局部组件：哪个组件引入就在哪个组件使用

  嵌套流程：
  1.设计组件内容
  2.在引入组件中<app.vue>，script里import上方组件
  3.在引入组件中<app.vue>，export里components进行注册
  4.在引入组件中<app.vue>，进行使用，<users></users>

-->

<!-- scoped style样式值应用于本界面 -->
<style scoped>
h1{
  color: hotpink;
}
</style>

