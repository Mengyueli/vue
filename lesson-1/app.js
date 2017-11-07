new Vue({
		el:"#vue-app",
		data:{
			name:"Henry",
			job:"web 前端开发",
			website:"http://www.baidu.com",
			websiteTag:"<a href='http://www.baidu.com'>123</a>"
		},
		methods:{
			greet:function(time){
				// 这里的this指向是new Vue的对象
				return "Good " + time + " " + this.name + "!";
			}
		}
	});
/*
	el:element-需要控制的标签元素
	data:用于存储各个类型的数据<array,object,string,number>
	methods:用于存储各种方法
	v-bind:指令：是带有 v- 前缀的特殊属性，用于绑定某个属性
	v-html:用于给某个标签绑定值为标签的属性
	语法糖：
		":" : 是v-bind的语法糖，和v-bind效果相同


*/