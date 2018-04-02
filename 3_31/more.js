var one = new Vue({
	el:"#vue-app-one",
	data:{
		title:"这是1的内容"
	},
	methods:{
		
	},
	computed:{
		greet:function(){
			return "Hello one"
		}
	}
})
var two = new Vue({
	el:"#vue-app-two",
	data:{
		title:"这是2的内容"
	},
	methods:{
		changeTitle:function(){
			one.title="改名";
		}
	},
	computed:{
		greet:function(){
			return "Hello two"
		}
	}
});
two.title="two 也改变"