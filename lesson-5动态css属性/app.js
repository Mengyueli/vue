new Vue({
		el:"#vue-app",
		data:{
			changeColor:false,
			color:false,
			width:false
			
		},
		methods:{
			


		},
		computed:{
			compareClasses:function(){
				return {
					color:this.color,
					width:this.width
				}
				
			}
		}
		
	});
/*
	动态css样式：
	v-bind:class:用于绑定对应的样式对象（**一定是对象{}*）
	class对象值：有两个值，分别为true 和 false
	注意：在对象中，key值是样式，value值是属性
	经常改变样式：最好使用computed计算属性
*/