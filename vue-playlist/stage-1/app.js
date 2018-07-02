new Vue({
  el: "#app",
  //定义对象
  data: {
    message: "vue.js的核心是一个允许采用简介的模板来声明式的渲染进DOM系统"
  },
  // 定义方法
  methods: {

  }
});

new Vue({
  el: "#app-2",
  data: {
    message: "hello" + new Date().toLocaleString()
  },
  methods: {

  }
});

new Vue({
  el: "#app-3",
  data: {
    seen: true
  }
});

new Vue({
  el: "#app-4",
  data: {
    todos: [{
        text: "学习JavaScript"
      },
      {
        text: "学习vue"
      },
      {
        text: "整个新项目"
      }
    ]
  },
  methods: {
    addOne: function() {
      this.todos.push({
        text: "新项目"
      });
    }
  }
});

new Vue({
  el: "#app-5",
  data: {
    message: "this is a message"
  },
  methods: {
    reverseMessage: function() {
      this.message = this.message.split('').reverse();
    }
  }
});

new Vue({
  el:"#app-6",
  data:{
    message:"请输入密码",
  },
  methods:{
    moveOn:function(){
      this.message="";
    }
  }
});
