<!-- template:使我们需要用的模板,模板中有且只能有一个根标签-->
<template>
  <div id="app">
    <app-header></app-header>
    <app-user></app-user>
    <app-footer></app-footer>
    

  </div>
</template>

<script>
import Header from './components/Header'
import Footer from './components/Footer'
import Users from './components/Users'


export default {
  name: 'app',
  components: {
    "app-header":Header,
    "app-footer":Footer,
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

