<template>
  <div class="users">
    <h1>Users</h1>
    <ul>
      <li v-for="user in users" v-on:click="user.show=!user.show">
        <h2>{{user.name}}</h2>
        <h3 v-show="user.show">{{user.job}}</h3>
      </li>
    </ul>
  </div>
</template>

<script>
  export default{
    name:"users",
    data(){
      return{
        users:[
          {name:"Henry",job:"devp",show:false},
          {name:"jude",job:"devp",show:false},
          {name:"jude2",job:"devp",show:false}
        ]
      }
    }
  }
</script>

<style scoped>
  h1{
    color:green;
  }

  .users{
    width : 100%;
    max-width:1200px;
    margin:40px auto;
    padding:0 20px;
    box-sizing:border-box;
  }

  ul{
    display:flex;
    flex-wrap:wrap;
    list-style-type: none;
    padding:0;
  }

  li{
    flex-grow:1;
    flex-basis:auto;
    text-align:center;
    padding:30px;
    border: 1px solid #222;
    margin:10px;
  }
</style>
