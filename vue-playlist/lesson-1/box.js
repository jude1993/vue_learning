new Vue({
  el:"#vue-box",
  data:{
    X:0,
    Y:0
  },
  methods:{
    changeXY:function(event){
      this.X=event.offsetX;
      this.Y=event.offsetY;
    }
  }
});
