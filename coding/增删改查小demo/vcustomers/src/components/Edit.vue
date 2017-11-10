<template>
  <div id="edit" class="container">
    <h1 class="bg-warning text-light p-3">编辑用户</h1>
    <form action="" v-on:submit="editCustomer">
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
      <input type="submit" value="确定" class="btn btn-block btn-info" >
    </form>
  </div>
</template>

<script>


  export default {
    name: 'edit',
    data(){
      return{
        customer:{},
        id:this.$route.params.id
      }
    },
    methods: {
      getCustomers() {
        this.$http.get("http://localhost:3000/users/" + this.id)
          .then((res) => {
//                console.log(res);
            this.customer = res.body;
          })
      },
      editCustomer(e) {
        e.preventDefault();
        let newCustomer = {
          name: this.customer.name,
          phone: this.customer.phone,
          email: this.customer.email,
          education: this.customer.education,
          graduationschool: this.customer.graduationschool,
          profession: this.customer.profession,
          profile: this.customer.profile,

        };
        this.$http.patch("http://localhost:3000/users/" + this.id, newCustomer).then((res) => {
          console.log(res);
          this.$router.push({path:"/",query:{sbqalert:"用户修改成功"}});
        });

      }
    },
//    是在
    created(){
      this.getCustomers();
    }
  }
</script>

<style>

</style>
