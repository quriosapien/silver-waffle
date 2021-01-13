import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const jokesUrlBase = 'https://v2.jokeapi.dev/joke'
const resolveJson = res => res.json()

export default new Vuex.Store({
  state: {
    jokes: []
  },
  mutations: {
    SET_JOKES (state, payload) {
      state.jokes = payload.jokes
    }
  },
  actions: {
    fetchJokes ({ commit, dispatch, state }, { data, success, fail }) {
      // don't hit API to get 0 jokes
      if (data.amount === 0) {
        commit('SET_JOKES', {
          jokes: []
        })
        return
      }

      // generating route from baseUrl of API
      const jokesUrlFinal = `${jokesUrlBase}/${data.genre}?amount=${data.amount}`

      // using fetch to hit the API
      fetch(jokesUrlFinal)
        .then(resolveJson)
        .then((res) => {
          // the API contract is different when only 1 joke is demanded.
          // classic example of how APIs should not be created
          if (res.jokes) {
            commit('SET_JOKES', res)
          } else {
            res.jokes = [{
              category: res.category,
              id: res.id,
              safe: res.safe,
              type: res.type
            }]
            if (res.type === 'single') {
              res.jokes[0].joke = res.joke
            } else {
              res.jokes[0].setup = res.setup
              res.jokes[0].delivery = res.delivery
            }
            commit('SET_JOKES', res)
          }
        })
        .catch(console.log)
    }
  },
  getters: {
    // handling if state.jokes is undefined
    jokes: state => state.jokes || []
  },
  modules: {
  }
})
