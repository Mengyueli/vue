new Vue({
		el:"#vue-app",
		data:{
			a:0,
			b:0, 
			age:20
			
		},
		methods:{
			// addToA:function(){
			// 	console.log("addToA");
			// 	return this.a + this.age;
			// },
			// addToB:function(){
			// 	console.log("addToB");
			// 	return this.b + this.age;
			// }


		},
		computed:{
			addToA:function(){
				console.log("addToA");
				return this.a + this.age;
			},
			addToB:function(){
				console.log("addToB");
				return this.b + this.age;
			}
		}
		
	});
/*
	computed:计算属性(应用在搜索里)
	computed:计算属性和方法method使用方式极度相似，
	使用场景：处理频繁调用方法的时候，<搜索>，建议使用计算属性
	使用规则：计算属性，在调用的时候不能加（），
*/