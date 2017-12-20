<template>
  <div>
    <div class="w-100 p-1 rank my-1" v-for="single in data">
      <div class="picture pull-left h-100 p-1">
        <a href="" class="d-inline-block">
          <img class="d-inline-block" v-bind:src="single.picUrl" alt="">
        </a>
      </div>
      <div class="pull-right p-1 context h-100">
        <h6 class="title">
          {{single.topTitle}}
        </h6>
        <p class="w-100">
          <span class="d-inline-block w-100" v-for="(song,index) in single.songList">
            {{song.songname}}-<a href="">{{song.singername}}</a><br>
          </span>
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: '',
  data () {
    return {
      data:[]
    }
  },
  methods:{
    MusicJsonCallback(data){
      console.log(data);
    },
  	 getData(){
        //jsonp
        this.$jsonp('/api/v8/fcg-bin/fcg_myqq_toplist.fcg', 
        {
        // 　　callbackQuery: 'callbackParam', // jsonp key //请求传递参数 1
        　　callbackName: 'MusicJsonCallback', // jsonp key //请求传递参数 2
        // 　　name: 'zhangsan', //请求传递参数 3
        // 　　type: 6 //请求传递参数 4
        } 
        ).then(json => {
        　　// 返回数据 json， 返回的数据就是json格式
          this.data = json.data.topList;
          console.log(json.data.topList);
        }).catch(err => {
        　　console.log(err)
        })
     }
  },
  mounted(){
    //请求数据
    this.getData();
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
  div.rank{
    height: 7rem;
  }
  div.rank div.picture{
    width: 30%;
  }
  div.rank div.picture>a>img{
    width: 100%;
    height: 100%;
  }
  div.rank div.context{
    width: 66%;
  }
  div.rank div.context p>span{
    font-size: 0.9em;
    overflow: hidden; 
    text-overflow: ellipsis; 
    white-space: nowrap;
  }
 /* div.rank div.context p span{
    text-overflow: ellipsis;
  }*/
</style>
