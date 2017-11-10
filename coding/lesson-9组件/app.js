//组件(名字，对象)data要使用工厂模式
Vue.component(
	"greeting",
	{
		template:'<p>{{name}}:Hello Component!<button v-on:click="changeName">changeName</button></p>',
		data:function(){
			return {
				//key:value
				name:"MiaoJie"
			}
		},
		methods:{
			changeName:function(){
				this.name = "ZhangRan";
			}
	}
});
new Vue({
		el:"#vue-app-one"
	});
new Vue({
		el:"#vue-app-two"
	});

/*
	component：组件的作用是抽离vue实例中的属性和方法
	在组件里(不能引用外面的，必须使用工厂模式)
	VUE-component：包含 模板<html> 属性<data...> 方法<method...>
	template:模板中，有且只能有一个根标签
		
*/