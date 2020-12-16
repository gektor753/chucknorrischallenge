<template>
<div class="buttonState">
  <button v-on:click="counter += 1">+1</button>
</div>


</template>

<script>


export default {
  name: 'buttonState',
  data() {

    return {
      counter: {}
    }
  }
}

</script>

<style scoped>
h1 {
  font-family: Avenir, Helvet\ica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
