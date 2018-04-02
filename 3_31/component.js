Vue.component("greeting",{
	template:`
	<p>
	{{name}}:Hello
	<button v-on:click="changeName">改名</button>
	</p>
	`,
	data:function(){
		return{
			name:"ABC"
		}
	},
	methods:{
		changeName:function(){
			this.name="qwe";
		}
	}
})


new Vue({
	el:"#vue-app-one"
	
});
new Vue({
	el:"#vue-app-two"
	
});
