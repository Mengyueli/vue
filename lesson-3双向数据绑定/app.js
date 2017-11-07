new Vue({
		el:"#vue-app",
		data:{
			age111:18,
			name:"Henry"
			
		},
		methods:{
			logName:function(e){
				// console.log(this.$refs.name.value);
				this.name = this.$refs.name.value;
				
			},
			logAge:function(){
				
			}

		}
	});
/*
	v-model:双向数据绑定的指令，应用于input,textarea,select(v-model的值要和data里的key值相同)
	ref:用于设置元素的唯一标识，通过$refs获取属性值
*/