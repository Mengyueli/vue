new Vue({
		el:"#vue-app",
		data:{
			age:18,
			x:0,
			y:0
		},
		methods:{
			addAge:function(inc){
				// console.log("加一岁");
				// this.age++;
				this.age += inc;
			},
			subtractAge:function(dec){
				// console.log("减一岁");
				// this.age--;
				this.age -= dec;
			},
			moveXY:function(event){
				// console.log("鼠标正在移动中");
				// console.log(event);
				this.x = event.offsetX;
				this.y = event.offsetY;
			},
			// stopPropagation:function(event){
			// 	event.stopPropagation();
			// 	// event.cancelBubble = true;
			// }
			alert:function(){
				alert("Hello World");
			},
			logName:function(e){
				console.log("名字正在打印中");
			},
			logAge:function(){
				console.log("年龄正在打印中");
			}

		}
	});
/*
	事件：是按钮触发时处理逻辑的方法

	v-on:给某个事件绑定到某个元素上
	"@" : 语法糖，跟v-on效果一样，
	事件值：可以使对应的方法，也可以是具体的值
	优先级：首先找方法，如果没有方法，就找属性
	事件修饰符： 
		stop：阻止冒泡事件
		once:事件只生效一次
		prevent:阻止默认事件


*/