<template>
  <footer>
  	<h1>{{end}}</h1>
  </footer>
</template>
<script>


export default {
  data(){
    return{
      end:"这是结尾"
    }
  },
  methods:{
    
  }
}
</script>

<style scoped>
footer{
	background: lightgreen;
	padding: 10px;
}
h1{
	background: hotpink;
	text-align: center;
	color: #fff;
}

</style>