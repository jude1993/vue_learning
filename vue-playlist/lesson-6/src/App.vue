<!-- 1.模板:html结构 --> //有且只有一个根标签
<template>
  <div id="app">
    <!-- <h1>{{title}}</h1> -->
    <!-- <users></users> -->
    <app-header></app-header>
    <users></users>
    <app-footer></app-footer>
  </div>
</template>

<!-- 2.行为:处理逻辑 -->
<script>

//局部注册组件
import Users from "./components/Users"
import Header from "./components/Header"
import Footer from "./components/Footer"

export default {
  name: 'App',
  data(){
    return {
      title :"这是第一个脚手架项目"
    }
  },
  components:{
    //名字不能和已有的标签冲突
    "users":Users,
    "app-header":Header,
    "app-footer":Footer
  }
}
</script>

<!-- 3.样式:解决样式 -->
<!-- scoped会给标签生成一个标示区分不同组件中的标签 -->
<style scoped>
h1{
  color:purple
}
</style>
