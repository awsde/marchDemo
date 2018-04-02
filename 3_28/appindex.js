new Vue({
	el:"#vue-app",
	data:{
		age:30,
		x:0,
		y:0
	},
	methods:{
		add:function(inc){
			this.age+=inc;
		},
		sub:function(dec){
			this.age-=dec;
		},
		updateXY:function(event){
			// console.log(event);
			this.x=event.offsetX;
			this.y=event.offsetY;
		},
		stopMove:function(event){
			event.stopPropagation();
		},
		alert:function(){
			alert("hello world");
		}
	}
})
