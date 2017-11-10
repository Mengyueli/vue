<template>
  <div id="add" class="container">
    <h1>显示详情</h1>

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
