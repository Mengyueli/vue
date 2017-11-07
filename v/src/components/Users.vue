<template>
  <ul id="Users">
    <li v-for="user in data" v-on:click="user.judge = !user.judge">
        <h3>{{user.name}}</h3>
        <p v-show="user.judge">{{user.job}}</p>
    </li>

  </ul>
</template>
<script>
export default {
  data(){
    return{
      data:[{name:"MiaoJie",job:"web前端开发",judge:false},{name:"MiaoJie",job:"web前端开发",judge:false},{name:"MiaoJie",job:"web前端开发",judge:false},{name:"MiaoJie",job:"web前端开发",judge:false},{name:"MiaoJie",job:"web前端开发",judge:false},{name:"MiaoJie",job:"web前端开发",judge:false}]
     
    }
  },
  methods:{
    
  },
  computed:{
    
  }
}
</script>

<style scoped>
#users{
  width: 100%;
  max-width: 1200px;
  margin: 20px auto;
  padding:0 20px;
  box-sizing: border-box;
}
ul{
  display: flex;
  flex-wrap:wrap;
  list-style: none;
  padding: 10px;
}
li{
  flex-basis: 300px;
  text-align: center;
  padding: 30px;
  border:1px solid #222;
  margin: 15px;
  flex-grow: 1;
}

</style>