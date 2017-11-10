new Vue({
	el:".container",
	data:{
		width:"600",
		imgSrc:"img/bag.png",
		src:"img/bag-burst.png"
	},
	methods:{
		reduce:function(num){
			this.width -= num;
			if(this.width <=0){
				this.width = 0;
				alert("到底了！不要再点了！")
			}
		},
		restart:function(){
			this.width = 600;
		},
		judge:function(){
			return this.width > 300 ? this.imgSrc : this.src;
		}
	}
})