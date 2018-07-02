<template>
    <footer>
      <p>{{title}}</p>
    </footer>
</template>

<script>
export default {
  name: 'app-footer',
  data(){
    return {
      title:"footer"
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
