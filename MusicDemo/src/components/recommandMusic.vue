<template>
	<div>
		<!-- swiper -->
		<div class="swiper-container w-100">
		    <div class="swiper-wrapper">
		        <div class="swiper-slide" v-for="slider in datas.slider">
		        	<a v-bind:href="slider.linkUrl" class="d-inline-block">
		        		<img v-bind:src="slider.picUrl" alt="">
		        	</a>
		        </div>
		    </div>
		    <div class="swiper-pagination"></div>
		</div>
		<h6 class="h6 m-1 p-1">热门歌单</h6>
		<div class="content d-flex justify-content-between flex-wrap w-100">
			<div class="single w-50 p-1" v-for="single in datas.songList">
				<div class="picture">
					<router-link v-bind:to="/detail/ + single.id" class="d-inline-block"><img v-bind:src="single.picUrl" alt=""></router-link>
				</div>
				<p class="p-1">
					{{single.songListDesc}}
					<br>
					{{single.songListAuthor}}
				</p>
			</div>
		</div>
	</div>
</template>

<script>
import "../../static/css/swiper.min.css"
export default {
  name: '',
  data () {
    return {
    	datas:{},
    }
  },
  methods:{
  	//请求数据
  	getData(){
  		this.$axios.get("/api/musichall/fcgi-bin/fcg_yqqhomepagerecommend.fcg")
  		.then((res) => {
  			this.datas = res.data.data;
  			console.log(this.datas);
  			// console.log(this.datas.slider);
  			// console.log(this.datas.radioList);
  			// console.log(this.datas.songList);
  			this.Swiper();
  		});
  	},
  	Swiper(){
  		var mySwiper = new Swiper('.swiper-container', {
	    loop: true,
	    autoplay:1000,
	    speed:800,
	    observer:true,
		observeParents:true,
		autoplayDisableOnInteraction : false,
	    pagination : '.swiper-pagination',
		paginationClickable :true,
	  }) 
  	}

	  	
  },
  created(){
  	//jq跨域
  	// $.ajax({
  	// 	async:true,
  	// 	url:"http://music.163.com/api/personalized/newsong",
  	// 	type:"GET",
  	// 	dataType:"jsonp",
  	// 	jsonp:'callback',
  	// 	jsonpCallback:'handleResponse',
  	// 	data:{
  	// 		q:"javascript",
  	// 		count:1
  	// 	},
  	// 	success:function(data,status){
  	// 		console.log(data,status);
  	// 	},
  	// 	err:function(err){
  	// 		 console.log(err);
  	// 	}
  	// })
  	//axios跨域请求数据
  },
  mounted(){
  	this.getData();
  	},
  components:{

  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
/*@import url("../../static/css/swiper.min.css");*/
	div.container{
		background: #fff;
	}
	input.form-control{
		outline: none!important;
	}
	div.swiper-container{
		height: 10rem;
	}
	div.swiper-slide>a>img{
		height: 100%;
		width: 100%;
	}
	div.picture>a>img{
		width: 100%;
		height: 100%;
	}
	div.single>p{
		overflow: hidden; 
		text-overflow: ellipsis; 
		white-space: nowrap;
	}

</style>
