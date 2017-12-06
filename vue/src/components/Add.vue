<template>
  <div id="add" class="container">
    <h1 class="bg-warning text-light p-3">添加用户</h1>
    <form action="" v-on:submit="addCustomer">
      <div class="form-group">
        <label for="">姓名</label>
        <input type="text" class="form-control" placeholder="name" v-model="customer.name">
      </div>
      <div class="form-group">
        <label for="">电话</label>
        <input type="text" class="form-control" placeholder="phone" v-model="customer.phone">
      </div>
      <div class="form-group">
        <label for="">邮箱</label>
        <input type="text" class="form-control" placeholder="email" v-model="customer.email">
      </div>
      <div class="form-group">
        <label for="">学历</label>
        <input type="text" class="form-control" placeholder="education" v-model="customer.education">
      </div>
      <div class="form-group">
        <label for="">毕业学校</label>
        <input type="text" class="form-control" placeholder="graduationschool" v-model="customer.graduationschool">
      </div>
      <div class="form-group">
        <label for="">职业</label>
        <input type="text" class="form-control" placeholder="profession" v-model="customer.profession">
      </div>
      <div class="form-group">
        <label for="">个人简介</label>
        <textarea type="text" class="form-control" ref="detail" v-model="customer.profile" placeholder="profile"></textarea>
      </div>
      <input type="submit" class="btn btn-warning btn-block" value="添加">
    </form>
  </div>
</template>

<script>


  export default {
    name: 'add',
    data(){
      return{
        customer:{

        }
      }
    },
    methods:{
      addCustomer(e){
        if(!this.customer.name || !this.customer.phone || !this.customer.email || !this.customer.education || !this.customer.graduationschool || !this.customer.profession || !this.customer.profile){
          console.log("不能为空");
        }else{
          let newCustomer = {
            name:this.customer.name,
            phone:this.customer.phone,
            email:this.customer.email,
            education:this.customer.education,
            graduationschool:this.customer.graduationschool,
            profession:this.customer.profession,
            profile:this.customer.profile,
          };
          this.$http.post("http://localhost:3000/users",newCustomer).then((res) =>{
//            console.log(res);
            //添加成功后后的路由跳转(超全局的对象)router：路由：要路由到那个路径里,query:
            this.$router.push({path:"/",query:{sbqalert:"用户添加成功"}});
          })
        }
        e.preventDefault();

      }
    }
  }
</script>

<style>

</style>
