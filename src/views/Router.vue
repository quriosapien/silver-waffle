<template>
  <main class="router">
    <h1>Router Examples</h1>
    <div class="block route-simple">
      <router-link
        :to="{name: 'Home'}"
        tag="button"
        class="routeButton">
        Route Declaratively To Home
      </router-link>
    </div>
    <div class="block route-simple-params">
      <router-link
        :to="{
          name: 'Vuex',
          params: {
            genre: 'Programming'
          },
          query: {
            amount: 5
          }
        }"
        tag="button"
        class="routeButton">
        Route Declaratively To Vuex page with Params & Query
      </router-link>
    </div>
    <div class="block route-with-params">
      <h3>Route to Vuex Page with PathParams & QueryParams</h3>
      <p v-if="error" class="error">
        Please ensure that you have selected Genre and Amount of Joke(s) ...
      </p>
      <div>
        <label for="genre">Select Genre of Joke </label>
        <select
          name="genre"
          id="genre"
          v-model="genre"
          class="joke-genre">
          <option value="Programming">Programming Jokes</option>
          <option value="Spooky">Spooky Jokes</option>
          <option value="Pun">Pun Jokes</option>
          <option value="Christman">Christmas Jokes</option>
          <option value="Miscellaneous">Miscellaneous</option>
        </select>
      </div>
      <div>
        <label for="amount">Amount of Jokes </label>
        <input
          v-model="amount"
          type="number"
          class="joke-amount"
          placeholder="number of jokes"
          name="amount">
      </div>
      <div>
        <button class="routeButton" @click="routeToGetJokes">Route Programatiaclly to Vuex page with Path-Params & Query-Params</button>
      </div>
    </div>
  </main>
</template>

<script>
export default {
  name: 'Components',
  data: () => ({
    amount: 0,
    genre: '',
    error: false
  }),
  methods: {
    resetErrors () {
      this.error = false
    },
    routeToGetJokes () {
      if (!this.validateInputs()) {
        this.error = true
        return
      }

      this.$router.push({
        name: 'Vuex',
        params: {
          genre: this.genre || ''
        },
        query: {
          amount: this.amount || 0
        }
      })
    },
    validateInputs () {
      return (this.genre !== '') && (this.amount > 0)
    }
  },
  watch: {
    genre () {
      this.resetErrors()
    },
    amount () {
      this.resetErrors()
    }
  }
}
</script>

<style scoped>
.block {
  margin: 20px 10px;
  padding: 10px;
  border: 2px solid #2c3e50;
  border-radius: 8px;
  box-shadow: 0px 0px 8px 2px #2c3e50;
}

.joke-genre {
  padding: 5px 20px 10px 10px;
  font-size: 14px;
}
.joke-amount {
  padding: 5px 10px;
  font-size: 14px;
}

.routeButton {
  margin: 5px;
  padding: 8px 40px;
  border: none;
  border-radius: 8px;

  font-size: 14px;
  font-weight: bold;
  color: white;
  background-color: #2c3e50;

  cursor: pointer;
}

.routeButton:hover {
  transform: scale(1.1);
  background-color: #42b983;
}

.error {
  color: red
}
</style>
