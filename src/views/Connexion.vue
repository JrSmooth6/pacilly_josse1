<template>
    <div class="forms">
        <Signin></SignIn>
        <Register></Register>
        
    </div>
</template>
<script>
import Register from '../components/Register.vue';
import Signin from '../components/Signin.vue';
export default{
  name:'Connexion',
  components:{
    Register,
    Signin
  }
}
</script>
