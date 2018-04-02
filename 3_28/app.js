//实例化vue对象
new Vue({
    el:"#vue-app",
    data:{
        name:'ABCfriends',
        website:'https://www.baidu.com/',
        websiteTag:"<a href='https://www.baidu.com/'>The website</a>"
    },
    methods:{
      greet: function (time) {
          return 'Good'+time+ ''+this.name+'!';
      }
    }
});
/*
* el:element需要获取的元素，一定是HTML中根容器元素
* data:用于数据的存储
* methods 调用方法的对象   用于存储各种方法
*
*/