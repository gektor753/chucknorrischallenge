<template>

<div id="item">
{{ joke }}
</div>
</template>

<script>

export default {
  name: "item",
  props:{
    joke: String
  }
}

</script>

<style scoped>
#item{

  width: 300px;
  border: 15px solid red;
  padding: 50px;
  margin: auto;
}
</style>