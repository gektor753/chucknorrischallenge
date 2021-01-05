<template>

<div id="item">
{{ joke }}

  <button v-if="isDelete" @click="$emit('deleteClick')">Удалить!</button>
</div>
</template>

<script>

export default {
  name: "item",
  props:{
    joke: String,
    isDelete: Boolean
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