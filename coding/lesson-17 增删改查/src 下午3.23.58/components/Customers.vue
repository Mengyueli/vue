<template>
  <div id="customers" class="container">
    <h1 class="page-header text-muted">用户管理系统</h1>
    <br>
    <table class="table table-striped">
      <thead>
      <tr>
        <th>姓名</th>
        <th>电话</th>
        <th>邮箱</th>
        <th></th>
      </tr>
      </thead>
      <tbody>
      <tr v-for="(customer,index) in customers">
        <td>{{customer.name}}</td>
        <td>{{customer.phone}}</td>
        <td>{{customer.email}}</td>
        <td>
          <button class="btn btn-secondary" v-on:click="detail(index)">
            <router-link to="/profile">查看详情</router-link>
          </button>
        </td>
      </tr>
      </tbody>
    </table>
  </div>
</template>

<script>


  export default {
    name: 'customers',
    data(){
      return{
        customers:[]
      }
    },
//    钩子函数，dom开始创建还未出现
    created(){
      this.$http.get("http://localhost:3000/users")
        .then((res) => {
          console.log(res);
          this.customers = res.body;
        })
    },
    methods:{
      detail:function(index){
        console.log(index);
//        this.$http.
      }
    }
  }
</script>

<style>

</style>
