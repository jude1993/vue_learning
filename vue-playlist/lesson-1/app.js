//实例化vue对象
new Vue({
  el:"#vue-app",
  data:{
    name:"jude",
    job:"web开发",
    website:"http://www.baidu.com",
    websiteTag:"<a href='http://www.baidu.com'>百度2</a>"
  },
  methods:{
    greet:function(name){
      return "hello " + name + " " + this.name + "!";
    }
  }
});

/*
* el:element 需要获取的元素，一定是HTML中的根容器元素
* data: 用于数据的存储
* methods:定义对象中的方法
* 在方法中使用data中的值可以直接用 this.属性 来获取
*/

new Vue({
  el:"#vue-events",
  data:{
    age:30
  },
  methods:{
    add:function(inc){
      this.age+=inc;
    },
    subtract:function(dec){
      this.age-=dec;
    }
  }
});


new Vue({
  el:"#vue-canvas",
  data:{
    x:0,
    y:0
  },
  methods:{
    updateXY:function(event){
      //console.log(event);
      this.x=event.offsetX;
      this.y=event.offsetY;
    },
    stopMoving:function(event){
      event.stopPropagation();
    },
    alert:function(){
      alert("hello");
    }
  }
});
