var one = new Vue({
  el:"#vue-app-one",
  data:{
    title:"app-one"
  },
  methods:{
    changeTitle:function(){
      two.title = "new content"
    }
  },
  computed:{
    greet:function(){
      return "Hello App one"
    }
  }
});

var two = new Vue({
  el:"#vue-app-two",
  data:{
    title:"app-two"
  },
  methods:{

  },
  computed:{
    greet:function(){
      return "Hello App two"
    }
  }
});

// 定义一个组件，将公共的功能抽象为一个组件
Vue.component("greeting",{
  template:"<p>hello {{name}},age:{{age}} <button v-on:click='changeName'>changeName</button></p>",
  data:function(){
    return {
      name:"jude",
      age:23
    }
  },
  methods:{
    changeName:function(){
      this.name = "new name"
    }
  }
});

new Vue({
  el:"#vue-3"
});

new Vue({
  el:"#vue-4"
});
