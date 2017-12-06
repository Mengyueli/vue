<template>
  <div id="customers" class="container">
    <Alert v-bind:message="alert"></Alert>
    <h1 class="page-header text-muted">用户管理系统</h1>
    <br>
    <!--input标签绑定属性-->
    <input type="text" class="form-control" placeholder="根据姓名搜索内容" v-model="filterInput">
    <table class="table table-striped">
      <thead>
      <tr>
        <th>id</th>
        <th>姓名</th>
        <th>电话</th>
        <th>邮箱</th>
        <th></th>
      </tr>
      </thead>
      <tbody>
      <tr v-for="customer in filterCustomers(customers,filterInput)">
        <td>{{customer.id}}</td>
        <td>{{customer.name}}</td>
        <td>{{customer.phone}}</td>
        <td>{{customer.email}}</td>
        <td>
            <router-link v-bind:to="/customerDetail/ + customer.id">查看详情</router-link>
        </td>
      </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import Alert from './Alert'

  export default {
    name: 'customers',
    data(){
      return{
        customers:[],
        filterInput:"",
        alert:""
      }
    },
    //方法：
    methods:{
      fetchCustomers:function(){
        this.$http.get("http://localhost:3000/users")
          .then((res) => {
            console.log(res);
            this.customers = res.body;
          })
      },
      //customers数组变成一个方法
      filterCustomers(customers,filterInput){
        //item数组的每一个元素
        return customers.filter(function(item){
//          es6字符串方法
          return item.name.match(filterInput);
        });
      }
    },
    //钩子函数，dom开始创建还未出现,决定数据什么时候展示到页面上
    created(){
      if(this.$route.query.sbqalert){
        this.alert = this.$route.query.sbqalert;
      }
      this.fetchCustomers();
    },
//    注册组件
    components:{
      Alert
    }
  }
</script>

<style>

</style>
