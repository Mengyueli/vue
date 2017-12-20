<template>
 <div class="">
 	<!-- 搜索框 -->
	<ul class="nav d-flex justify-content-around border-top-0 border-right-0 border-left-0 border border-secondary p-1" id="myTab" role="tablist">
	  <li class="nav-item">
	    <router-link  class="navbar"  to="/recommand">推荐音乐</router-link>
	  </li>
	  <li class="nav-item">
	    	<router-link  class="navbar" to="/hot">热歌榜</router-link>
	  </li>
	  <li class="nav-item">
	    	<router-link  class="navbar"  to="/search">搜索</router-link>
	  </li>
	</ul>
	<router-view></router-view>
 </div>
</template>

<script>
export default {
  name: '',
  data () {
    return {
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
	div.container{
		background: #fff;
	}
	input.form-control{
		outline: none!important;
	}
	li.nav-item>router-link.navbar:active{
		color: red!important;
	}
</style>
