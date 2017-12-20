<template>
  <div class="search">
    <div class="search-content form-group py-3 px-1">
      <input type="text" class="form-control" placeholder="搜索歌曲、歌单、专辑" v-model="searchContent">
    </div>
  </div>
</template>

<script>
export default {
  name: '',
  data () {
    return {
      searchContent:"",
    }
  },
  method:{
  	
  },
  created(){
    
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
  div.search-content{
    background: lightgray;
  }
</style>
