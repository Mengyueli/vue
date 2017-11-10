<template>
  <ul id="Users">
    <li v-for="user in users" v-on:click="user.judge = !user.judge">
        <h3>{{user.name}}</h3>
        <p v-show="user.judge">{{user.job}}</p>
    </li>
    <button v-on:click="deleteUser">删除用户</button>
  </ul>
</template>
<script>
//属性传值：父组件到子组件
/*
  1.属性绑定：v-bind(父组件里子组件标签自定义属性)
  2.自定义属性:<users>()
  3.props（子组件属性里）
  传值 & 传引用
  引用：Object Array
  传值：String，Number，Boolean
*/
//事件传值：子组件到父组件
/*
  1.注册事件<$emit>(在子组件中Header.vue h1的点击事件)
  2.绑定事件<v-on:自定义事件>
  3.实现方法及逻辑
*/
export default {
  // props:["users"],
  props:{
    users:{
      type:Array,
      required:true
    }
  },
  data(){
    return{

     
    }
  },
  methods:{
    deleteUser:function(){
      this.users.pop();
    }
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