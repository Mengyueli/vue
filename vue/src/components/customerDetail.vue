<template>
  <div id="customerDetail" class="container">
    <router-link class="btn btn-link" to="/">返回主页</router-link>
    <h1 class="display-4 text-muted p-3">显示详情
      <span class="float-right">
        <router-link class="btn btn-info" v-bind:to="/edit/ + customer.id">编辑</router-link>
        <button class="btn btn-danger" v-on:click="deleteCustomer(customer.id)">删除</button>
      </span>

    </h1>
      <h2>{{customer.name}}</h2>
    <ul class="list-group">
      <li class="list-group-item" v-for="(val,key) in customer">
        <strong>{{key}}:</strong>{{val}}
      </li>
    </ul>
  </div>
</template>

<script>



  export default {
    name: 'customerDetail',
    data(){
      return{
        //拿到路由参数的id，params是固定的,route：是在浏览器里拿到参数,router:是要路由到哪个路径里去
//        id:this.$route.params.id
        customer:{}
      }
    },
    //方法：
    methods:{
      fetchCustomer:function(id){
        this.$http.get("http://localhost:3000/users/" + id)
          .then((res) => {
            console.log(res);
            this.customer = res.body;
          })
      },
      deleteCustomer(id){
//        删除方法
        this.$http.delete("http://localhost:3000/users/" + id).then((res) => {
          this.$router.push({path:"/",query:{sbqalert:"用户删除成功"}});
        })
      }

    },
    //    钩子函数，dom开始创建还未出现,决定数据什么时候展示到页面上 this.$route.params.id是取到传递过来的参数
    created(){
      this.fetchCustomer(this.$route.params.id);
    }
  }
</script>

<style>

</style>
