<template>
  <div class="container">
   <form v-on:submit="loginSubmit">
   	<div class="form-group">
	   	<br>
	   	<label for="">用户名称</label>
	   	<input type="text" class="form-control"  name="name" v-model="user.name"> 
   </div>
   <div class="form-group">
   	<label for="">密码</label>
   	<input type="password" class="form-control"  name="current_password" v-model="user.password">
   </div>
   <input type="submit" class="btn btn-success" value="确认">
   <router-link to="/register" class="small text-success">没有账号，请注册</router-link>
   </form>
  </div>
</template>

<script>
export default {
	name:'',
	data(){
	 	return{
	 		users:{},
	 		user:{},
	 		username:'',
	 		userpwd:'',
	 	}
	},
	methods:{
	 	loginSubmit(e){
	 		e.preventDefault();
	 		if(this.user.name && this.user.password){
	 			this.user.pwd = hex_md5(this.user.password);
	 			//遍历得到的数组
		 		for(let i in this.users){
		 			if(this.user.name === this.users[i].name) {
		 				let num = i;
		 				this.username = this.user.name;
		 				// console.log(num);//3
		 				if(this.user.pwd === this.users[num].pwd){
		 					//存储coolie或者session
			 				this.StoreMsg(this.user);
			 				this.$router.push({path:'/recommand'});
			 				this.userpwd = this.user.pwd;
			 				break;
		 				}
		 			}
		 		}
		 		if(!this.username){
		 			alert("该用户名不存在！");
		 		}
		 		if(!this.userpwd){
		 			alert("密码不正确！");
		 		}
	 		}
	 		
	 	},
	 	StoreMsg(user){
	 		// console.log(user);
	 		// window.addEventListener("storage",function(user){
	 			// console.log(user);
	 			　location.reload();
	 			localStorage.name = user.name;
	 		// });
	 		
	 	},

	},
	created(){
		this.$http.get("http://localhost:3000/VueUser").then(res => this.users = res.body);
	}
}
</script>
<style scoped>
  
</style>