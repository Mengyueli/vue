<template>
  <header>
  	<h1>{{title}}</h1>
  </header>
</template>
<script>


export default {
  data(){
    return{
      title:"Vue Demo"
    }
  },
  methods:{
    
  }
}
</script>

<style scoped>
header{
	background: grey;
	padding: 10px;

}
h1{
	text-align: center;
	background:lightgray;
	color: white;

}


</style>