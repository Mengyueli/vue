<!-- template:使我们需要用的模板,模板中有且只能有一个根标签-->
<template>
  <div id="home">
    <app-header v-bind:sbqtitle="title" v-on:sbqEvent="updateTitle($event)"></app-header>
    <!-- 自定义属性 -->
    <app-users v-bind:users="users_data"></app-users>
    <app-footer v-bind:sbqtitle="title"></app-footer>
  </div>
</template>

<script>

  import Header from './Header'
  import Footer from './Footer'
  import Users from './Users'


  export default {
    name: 'home',
    components: {
      "app-header": Header,
      "app-footer": Footer,
      "app-users": Users
    },
    data() {
      return {
        users_data: [],
        title: "Angular JS"
      }
    },
    methods: {
      updateTitle: function (title) {
        this.title = title;
      }
    },
    // 页面展示之前请求数据
    created(){
      this.$http.get("https://jsonplaceholder.typicode.com/users").then((res) => {
        // console.log(res);
        this.users_data = res.body;
      })
    }
  }
</script>

<style scoped>

</style>

