<!-- 1.模板:html结构 --> //有且只有一个根标签
<template>
  <div id="home">
    <!-- <h1>{{title}}</h1> -->
    <!-- <users></users> -->
    <!-- 子组件向父组件传值 -->
    <app-header v-on:changeTitles="updateTitle($event)" v-bind:title="title"></app-header>
    <users v-bind:users="users"></users>
    <users v-bind:users="users"></users>
    <app-footer v-bind:title="title"></app-footer>
  </div>
</template>

<!-- 2.行为:处理逻辑 -->
<script>

//局部注册组件
import Users from "./Users"
import Header from "./Header"
import Footer from "./Footer"

export default {
  name: 'home',
  data(){
    return {
      // title :"这是第一个脚手架项目"
      users:[
        // {name:"Henry",job:"devp",show:false},
        // {name:"jude",job:"devp",show:false},
        // {name:"jude2",job:"devp",show:false}
      ],
      title:"传递的是一个值，(number String Boolean)"
    }
  },
  methods:{
    updateTitle:function(title){
      this.title = title;
    }
  },
  components:{
    //名字不能和已有的标签冲突
    "users":Users,
    "app-header":Header,
    "app-footer":Footer
  },
  created(){
    this.$http.get("http://jsonplaceholder.typicode.com/users")
    .then((data)=>{
      this.users = data.body;
    })
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
