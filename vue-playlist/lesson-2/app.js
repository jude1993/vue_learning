new Vue({
  el: "#vue-1",
  data: {
    name: "jude",
    age: "25"
  },
  methods: {
    logName: function() {
      //console.log("input name");
      //this.name = this.$refs.name.value;
    },
    logAge: function() {
      //console.log("input age");
      //this.age = this.$refs.age.value;

    }
  }
});

new Vue({
  el: "#vue-2",
  data: {
    a: 0,
    b: 0,
    age: 20
  },
  // 每次触发单个方法，都会执行时所有方法，重新渲染dom结构，消耗性能
  methods: {
    // addToA: function() {
    //   console.log('addToA');
    //   return this.age + this.a;
    // },
    // addToB: function() {
    //   console.log('addToB');
    //   return this.age + this.b;
    // }
  }，
  //每次只触发单个方法，当dom结构变化幅度大的时候使用，比如搜索
  //vue会复制一份虚拟dom，当虚拟dom与真实dom内容不一样的时候才会触发。
  computed:{
    addToA: function() {
      console.log('addToA');
      return this.age + this.a;
    },
    addToB: function() {
      console.log('addToB');
      return this.age + this.b;
    }
  }
});
