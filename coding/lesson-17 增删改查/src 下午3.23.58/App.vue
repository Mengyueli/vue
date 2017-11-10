<template>
  <div id="app">
      <nav class="navbar navbar-expand navbar-dark bg-dark">
        <div class="container bg-dark">
          <a class="navbar-brand" href="/">用户管理系统</a>
          <div class="collapse navbar-collapse">
            <ul class="navbar-nav mr-auto">
              <li class="nav-item">
                <router-link class="nav-link" to="/">Home</router-link>
              </li>
              <li class="nav-item">
                <router-link class="nav-link" to="/about">About</router-link>
              </li>
            </ul>
        </div>
          <button class="btn btn-light pull-right">
            <router-link class="nav-link" to="/add">点击添加</router-link>
          </button>
        </div>

      </nav>
    <br>


    <router-view></router-view>
  </div>
</template>

<script>


export default {
  name: 'app'

}
</script>

<style>

</style>
