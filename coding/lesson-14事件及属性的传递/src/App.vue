<!-- template:使我们需要用的模板,模板中有且只能有一个根标签-->
<template>
  <div id="app">
    <app-header v-bind:sbqtitle="title" v-on:sbqEvent="updateTitle($event)"></app-header>
    <!-- 自定义属性 -->
    <app-users v-bind:users="users_data"></app-users>
    <app-footer v-bind:sbqtitle="title"></app-footer>
  </div>
</template>

<script>
  import Header from './components/Header'
  import Footer from './components/Footer'
  import Users from './components/Users'


  export default {
    name: 'app',
    components: {
      "app-header": Header,
      "app-footer": Footer,
      "app-users": Users
    },
    data() {
      return {
        users_data: [{name: "MiaoJie", job: "web前端开发", judge: false}, {
          name: "MiaoJie",
          job: "web前端开发",
          judge: false
        }, {name: "MiaoJie", job: "web前端开发", judge: false}, {
          name: "MiaoJie",
          job: "web前端开发",
          judge: false
        }, {name: "MiaoJie", job: "web前端开发", judge: false}, {name: "MiaoJie", job: "web前端开发", judge: false}],
        title: "Angular JS"
      }
    },
    methods: {
      updateTitle: function (title) {
        this.title = title;
      }
    }
  }
</script>

<style scoped>

</style>

