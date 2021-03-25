<template>
  <div class="home">
    <Sidebar></Sidebar>
    <Todolist></Todolist>
  </div>
</template>

<script>
import Sidebar from '../components/Sidebar.vue'
import Todolist from '../components/Todolist.vue'
export default{
  name:'Connexion',
  components:{
    Sidebar,
    Todolist
    
  }
}
</script>
<style >
.home{
  display: grid;
  grid-template-columns: 1fr 1fr;
  ;
}
</style>
