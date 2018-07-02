  Vue.component('todo-item',{
    //todo-item组件现在接受一个
    //"prop" 类似于一个自定义特性
    // 这个prop名为todo
    props:['todo'],
    template:'<li>这是一个待办项</li>'
  });

new Vue({
  el:'app-1'
});
