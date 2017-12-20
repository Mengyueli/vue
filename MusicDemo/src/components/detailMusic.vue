<template>
  <div class="container">
   <h1>这里是歌曲详情展示页面</h1>
   <h2>{{id}}</h2>
  </div>
</template>

<script>
export default {
	name:'',
	data(){
	 	return{
	 		id:this.$route.params.id
	 	}
	},
	methods:{
	 	getData(){
	  		this.$axios.get("/api/musichall/fcgi-bin/fcg_yqqhomepagerecommend.fcg/" + this.id)
	  		.then((res) => {
	  			// this.datas = res.data.data;
	  			// console.log(res);
	  		});
  		},

	},
	created(){
		// this.getData();
	}
}
</script>
<style scoped>
  
</style>