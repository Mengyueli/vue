<template>
  <div id="add" class="container">
    <!--<form action="http://localhost:8080/">-->
      <div class="form-group">
        <label for="">姓名</label>
        <input type="text" class="form-control" ref="name">
      </div>
      <div class="form-group">
        <label for="">电话</label>
        <input type="text" class="form-control" ref="phone">
      </div>
      <div class="form-group">
        <label for="">邮箱</label>
        <input type="text" class="form-control" ref="mail">
      </div>
      <div class="form-group">
        <label for="">学历</label>
        <input type="text" class="form-control" ref="education">
      </div>
      <div class="form-group">
        <label for="">毕业学校</label>
        <input type="text" class="form-control" ref="graduation">
      </div>
      <div class="form-group">
        <label for="">职业</label>
        <input type="text" class="form-control" ref="profession">
      </div>
      <div class="form-group">
        <label for="">个人简介</label>
        <textarea type="text" class="form-control" ref="detail"></textarea>
      </div>
      <input type="submit" class="btn btn-warning btn-block" value="提交" v-on:click="addMessage">
    <!--</form>-->
  </div>
</template>

<script>


  export default {
    name: 'add',
    data(){
      return{
        arr:[]
      }
    },
    methods:{
      addMessage(){
//        console.log(123);
          var a = {"name":this.$refs.name.value,
            "phone":this.$refs.phone.value,
            "email":this.$refs.mail.value,
            "education":this.$refs.education.value,
            "graduationschool":this.$refs.graduation.value,
            "profession":this.$refs.profession.value,
            "profile":this.$refs.detail.value};

          this.$http.post("http://localhost:3000/users",a).then((res) => {
//            console.log(res);
            window.location.href="/"
          })
      }
    }
  }
</script>

<style>

</style>
