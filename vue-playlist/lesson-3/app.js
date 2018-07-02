new Vue({
  el:"#vue-1",
  data:{
    changeColor:false,
    changeLength:false
  },
  methods:{

  },
  computed:{
    compClasses:function(){
      return {
        changeColor:this.changeColor,
        changeLength:this.changeLength
      }
    }
  }
});

new Vue({
  el:"#vue-2",
  data:{
    error:false,
    success:false
  },
  methods:{

  }
});


new Vue({
  el:"#vue-3",
  data:{
    characters:["j1","j2","j3"],
    users:[
      {name:"jude1",age:30},
      {name:"jude2",age:30},
      {name:"jude3",age:30}
    ]
  },
  methods:{

  },
  computed:{

  }
});
