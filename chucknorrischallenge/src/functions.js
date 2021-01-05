import axios from "axios";
export function getJoke(){
    axios
        .get('https://api.chucknorris.io/jokes/random')
        .then(response => (this.joke = response.data.value))
}