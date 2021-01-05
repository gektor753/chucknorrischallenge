<template>
  <ul>
    <li v-for="(joke,n) in list" :key="joke.list">
      <item
          :is-delete="true"
          :joke="joke"
          v-on:deleteClick="$emit('deleteIt', n)"
      />
    </li>
  </ul>
</template>

<script>
import item from "@/components/item"

export default {
  components:{item},
  name: "list",
  props:{
  list: Array

  }
}
</script>

<style scoped>
ul{
  border: 5px solid black;

}
</style>