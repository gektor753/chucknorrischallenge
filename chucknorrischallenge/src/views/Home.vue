<template>
  <div id="app">
    <h2>Chuck Norris Jokes</h2>

    <p>
<button @click="getJoke()">Новая шутка!</button>
    </p>
    <p>
    <button @click="counter += 1; stateCounter()">Новая шутка каждые 3 секунды!</button>
    </p>
    <p>
    <button @click="counterJ += 1;stateJoke()">Добавить/удалить шутку</button>
    </p>
    <p>
    <button @click="removeAll()">Удалить все шутки!</button>
    </p>
    <item
      :joke="joke"
      />

   <li v-for="(joke,n) in favouriteJokes" :key="joke.favouriteJokes">
     <p>
       <span class ="joke"> {{ joke }}</span>
        <button @click="removeJoke(n)">Удалить!</button>
     </p>
        </li>
  </div>
</template>

<script>
import item from "@/components/item"
import {getJoke} from "@/functions"
export default {
  name: "Home",
components:{item},
  data() {
    return {
      joke: '',
      counter: 0,
      timer: null,
      favouriteJokes: [],
      jokeF:'',
      getJoke

    }
  },
  mounted() {
    if (localStorage.getItem('favouriteJokes')) {
      this.favouriteJokes = JSON.parse(localStorage.getItem('favouriteJokes'));
    }
  },
  methods: {

    stateCounter() {
      if (this.counter % 2) {
        this.timer = setInterval(() => {
          this.getJoke()
        }, 1000)
      } else {
        this.beforeDestroy()
      }
    },
    beforeDestroy() {
      this.joke = null
      delete this.joke
      clearInterval(this.timer)
    },
    addJoke() {
      if (!this.joke) {
        return
      }
      if(this.favouriteJokes.length < 4) {
        this.jokeF = this.joke;
        this.favouriteJokes.push(this.joke);
        this.saveJokes()
      }
      else{
        this.favouriteJokes.splice(0,1)
        this.jokeF = this.joke;
        this.favouriteJokes.push(this.joke);
        this.saveJokes()
      }
    },
    removeJoke(x) {
      this.favouriteJokes.splice(x, 1)
      this.saveJokes()
    },
    saveJokes() {
      const parsed = JSON.stringify(this.favouriteJokes)
      localStorage.setItem('favouriteJokes', parsed)
    },
    stateJoke() {
      if (this.joke !== this.jokeF ) {
        this.addJoke()
      }
        else{
        this.favouriteJokes.pop()
        this.saveJokes()
        this.jokeF = null
        }
      },
      removeAll(){
      this.favouriteJokes.splice(0,this.favouriteJokes.length)
        this.saveJokes()
      }
    }

}
</script>
