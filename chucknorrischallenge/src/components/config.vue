<template>
<div id="config">

</div>
</template>

<script>
import axios  from "axios";
const config = axios.create({
  baseURL:'https://api.chucknorris.io'
})
export default config()
</script>

<style scoped>

</style>