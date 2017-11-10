<template>
  <div id="Users">
    <h1 class="bg-light p-5">展示数据</h1>
    <table class="table table-striped">
      <thead>
        <tr>
          <th>姓名</th>
          <th>邮件</th>
          <th>电话</th>
          <th>删除</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(person,index) in data">
          <td>
            {{person.user}}
          </td>
          <td>
            {{person.mail}}
          </td>
          <td>
            {{person.phone}}
          </td>
          <td v-on:click="delData(index)">
            <i class="fa fa-times" aria-hidden="true"></i>
          </td>
        </tr>
      </tbody>
      <tfoot>
        <tr>
          <td></td>
        </tr>
      </tfoot>
    </table>
    <h1 class="bg-light p-5">添加数据</h1>
    <!-- <form action=""> -->
      <div class="form-group bg-light p-3 text-muted">
        <label for="user">姓名</label>
        <input type="text" class="form-control" ref="user">
      </div>
      <div class="form-group bg-light p-3 text-muted">
        <label for="mail">邮箱</label>
        <input type="text" class="form-control" ref="mail">
      </div>
      <div class="form-group bg-light p-3 text-muted">
        <label for="phone">电话</label>
        <input type="text" class="form-control" ref="phone">
      </div>
      <input type="submit" value="添加" class="btn btn-block btn-primary" v-on:click="add">
    <!-- </form> -->
  </div>
</template>
<script>
export default {
  data(){
    return{
      data:[]
    }
  },
  methods:{
    add:function(){
      var a = {user:this.$refs.user.value,mail:this.$refs.mail.value,phone:this.$refs.phone.value};
      this.data.push(a);
      // console.log(this.data);
    },
    delData:function(index){
      this.data.splice(index,1);
    }
   
  },
  computed:{
    
  }
}
</script>

<style scoped>


</style>