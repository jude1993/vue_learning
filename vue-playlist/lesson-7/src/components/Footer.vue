<template>
    <footer>
      <p v-on:click="changeTitle">{{title1}}{{title}}</p>
    </footer>
</template>

<script>
export default {
  name: 'app-footer',
  props:{
    title:{
      type:String
    }
  },
  data(){
    return {
      title1:"footer"
    }
  },
  methods:{
    changeTitle:function(){
      this.title = "footer title";
    }
  }
}
</script>

<style scoped>
  footer{
    background: #222;
    padding:6px;
  }
  footer p{
    color:lightgreen;
    text-align: center;
  }
</style>
