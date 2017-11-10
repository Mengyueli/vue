<!-- template:使我们需要用的模板,模板中有且只能有一个根标签-->
<template>
  <div id="app" class="container">
    <app-header></app-header>
    <app-user></app-user>
    

  </div>
</template>

<script>
import Header from './components/Header'
import Users from './components/Users'


export default {
  name: 'app',
  components: {
    "app-header":Header,
    "app-user":Users
  },
  data(){
    return{
      
    }
  },
  methods:{
    
  }
}
</script>

<style scoped>

</style>

