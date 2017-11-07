var a = new Vue({
		el:"#vue-app-one",

		data:{
			title:"this is vue-app-one",
			
		},
		methods:{
			

		},
		computed:{
			greet:function(){
				return "Hello App One";
			}
			
		}
	});
var b = new Vue({
		el:"#vue-app-two",

		data:{
			title:"this is vue-app-two",
			
		},
		methods:{
			change:function(){
				a.title = "slfn";
			}

		},
		computed:{
			greet:function(){
				return "Hello App Two";
			}
		}
	});
	b.title = "、";
/*
	
*/