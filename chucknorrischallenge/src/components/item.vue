<template>

<div id="item">

</div>
</template>

<script>
import axios from 'axios'
export default {
  name: "item",




    methods: {
      mounted() {
        axios
            .get('https://api.chucknorris.io/jokes/random')
            .then(response => (this.joke = response.data.value))
      }
    },
data() {
return {
  joke:''
}
    }

}

</script>

<style scoped>

</style>