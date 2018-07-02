<!-- 1.模板:html结构 --> //有且只有一个根标签
<template>
  <div id="app">
    <ul>
      <li>
        <router-link to="/">Home</router-link>
      </li>
      <li>
        <router-link to="/helloworld">HelloWorld</router-link>
      </li>
    </ul>
    <router-view></router-view>
  </div>
</template>

<!-- 2.行为:处理逻辑 -->
<script>

export default {
  name: 'App',
  data(){
    return {
    }
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
