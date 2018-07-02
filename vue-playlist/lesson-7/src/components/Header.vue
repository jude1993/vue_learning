<template>
  <header>
    <h1 v-on:click="changeTitle">{{title1}}{{title}}</h1>
  </header>
</template>

<script>
export default {
  name: 'app-header',
  props:{
    title:{
      type:String
    }
  },
  data(){
    return {
      title1:"Header"
    }
  },
  methods:{
    changeTitle:function(){
      // this.title = "header title";
      this.$emit("changeTitles","子向父组件传值");
    }
  },
  // beforeCreate:function(){
  //   alert("beforeCreate:组件实例化之前")
  // },
  // created:function(){
  //   alert("created:组件实例化完毕，但页面还未显示");
  // },
  // beforeMount:function(){
  //   alert("beforeMount:组件挂在前，页面仍未展示，但虚拟dom已经配置");
  // },
  // mounted:function(){
  //   alert("mounted:组件挂载后，此方法执行后，页面显示");
  // },
  // beforeUpdate:function(){
  //   alert("beforeUpdate:组件更新前，页面仍未更新，但虚拟dom已经配置");
  // },
  // updated:function(){
  //   alert("updated:组件更新，此方法执行后，页面展示");
  // },
  // beforeDestory:function(){
  //   alert("beforeDestory:组件销毁前");
  // },
  // destoryed:function(){
  //   alert("destoryed:组件销毁");
  // }
}
</script>

<style scoped>
  header{
    background: lightgreen;
    padding:10px;
  }
  h1{
    color:#222;
    text-align: center;
  }
</style>
