// <!-- 图片路径获取有问题！！！！ -->
new Vue({
	el:"#vue-app",
	data:{
		i:1，
		flag:true;
	},
	methods:{
		punch:function(){
			this.i++;
			if (this.i>=4){
				flag=flase
			};

		}，
		restart:function(){
			this.i=1;
			this.flag=true;
		}
	},
	computed:{
		
	}
})