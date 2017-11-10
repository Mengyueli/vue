<!-- template:使我们需要用的模板,模板中有且只能有一个根标签-->
<template>
  <div id="app">
    <!-- 实现点击跳转 -->
    <ul>
      <!-- a标签点击的话会刷新页面,占用网速 -->
      <!-- <a href="/">Home</a> -->
      <!-- <a href="/Test"></a> -->
      <!-- 项目优化，路由的话直接跳转 -->
      <li> <router-link to="/">Home</router-link></li>
      <li> <router-link to="/Test">Test</router-link></li>
    </ul>
    <!-- 挑转的是哪个组件，就在这个标签里展示（只能展示一个组件） -->
    <router-view></router-view>
  </div>
</template>

<script>



  export default {
    name: 'app',
    data() {
      return {
      }
    }
  }
</script>

<style scoped>

</style>

