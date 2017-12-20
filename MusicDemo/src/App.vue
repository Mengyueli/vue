<template>
  <div>
    <nav class="navbar navbar-expand navbar-success bg-success w-100">
    <div class="container bg-success">
        <div class="d-inline-block logo" alt=""></div>
        <span><a class="navbar-brand text-light d-inline-block" href="/recommand">
          QQ音乐</a>
        </span>
      
      <div class="collapse navbar-collapse">
      <ul class="navbar-nav ml-auto">
        <li class="nav-item">
          <router-link class="nav-link text-light" to="/register" v-if="!name">注册</router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link text-light" to="/login" v-if="!name">登录</router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link text-light" to="/" v-if="name">{{name}}</router-link>
        </li>
        <li class="nav-item" v-on:click="quit()">
          <router-link class="nav-link text-light" to="/login" v-if="name" >退出</router-link>
        </li>
      </ul>
      </div>
    </div>
  </nav>
    <router-view></router-view>
  </div>
</template>

<script>
//父组件到子组件属性传值练习

export default {
  name: 'app',
  data(){
    return{
      name:"",
    }
  },
  methods:{
    quit(){
      // this.name = '';
      // console.log(123);
      // window.addEventListener("storage",function(){
      //   window.localStorage.clear();
      // })
      　location.reload();
        window.localStorage.clear();
      // console.log(this.name);
    }
  },
  created(){
    this.name = localStorage.name;
  }
}
</script>

<style>
html{
  margin: 0 auto;
}
div.container>div.logo{
  width: 10%;
  height: 3rem;
  background:url(../static/img/big.png) no-repeat;
  background-size: 180%;
  background-position:-1.5rem -1rem;
}
a.router-link-active{
  color:rgb(48,167,73);
  text-decoration: none;
}
a{
  color: grey;
}
</style>
