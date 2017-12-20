<template>
  <div class="container">
  	<form v-on:submit="registerSubmit">
  		<div class="form-group">
	   	<br>
	   	<label for="">用户名称</label>
	   	<input type="text" class="form-control" v-model="user.name" name="name"> 
	   </div>
	   <div class="form-group">
	   	<label for="">邮箱</label>
	   	<small class="small text-danger">可用于找回密码</small>
	   	<input type="email" class="form-control" v-model="user.email" name="email">
	   </div>
	   <div class="form-group">
	   	<label for="">密码</label>
	   	<input type="password" class="form-control" v-model="user.password" name="current_password">
	   </div>
	   <div class="form-group">
	   	<label for="">确认密码</label>
	   	<input type="password" class="form-control" v-model="user.confirm" name="new_password">
	   </div>
	  <div class="form-group">
	   	<input type="submit" class="btn btn-success" value="提交">
	   	<router-link to="/login" class="small text-success">已有账号，请登录</router-link>
	  </div>
  	</form>
  </div>
</template>

<script>
export default {
 name:'',
 data(){
 	return{
 		user:{},
 		users:{},
 		username:'',
 	}
 },
 methods:{
 	registerSubmit(e){
 		e.preventDefault();
 		// console.log(123);
 		// console.log(this.user);
 		if(this.user.name && this.user.email && this.user.password){
 			//遍历得到的数组
 			for(let i in this.users){
 				if(this.users[i].name === this.user.name){
 					this.username = this.user.name;
 					break;
 				}else{
 					this.username = '';
 				}
 			}
 			if(this.username){
 				alert("该用户名已存在！");
 			}else{
 				if(this.user.password === this.user.confirm){
	 				//md5加密
	 				// console.log(this.user);
	 				this.user.pwd = hex_md5(this.user.password);
	 				// console.log(this.user.pwd);
	 				//上传到数据库
	 				this.$http.post("http://localhost:3000/VueUser",this.user).then(res => {
	 					//页面跳转
	 					this.$router.push({path:'/login'});
	 				});
	 				
	 			}else{
	 				alert("两次输入的密码不一致");
	 			}
 			}		
 		}else{
 			alert("请输入正确的信息！");
 		}
 	},
 	
 },
 created(){
		this.$http.get("http://localhost:3000/VueUser").then(res => this.users = res.body);
}
}
</script>
<style scoped>
  
</style>