import { mapGetters } from 'vuex'

export default {
  name: 'Vuex',
  computed: {
    ...mapGetters(['jokes']),
    selectedGenre () {
      return this.$route.params.genre || 'Programming'
    },
    selectedAmount () {
      return Number(this.$route.query.amount) || 1
    }
  },
  methods: {
    changeGenre () {
      let genre = this.selectedGenre
      if (genre === 'Programming') {
        genre = 'Spooky'
      } else if (genre === 'Spooky') {
        genre = 'Miscellaneous'
      } else if (genre === 'Miscellaneous') {
        genre = 'Pun'
      } else {
        genre = 'Programming'
      }

      this.$router.push({
        params: {
          genre
        },
        query: {
          amount: this.selectedAmount
        }
      })
    },
    decreaseAmount () {
      // can't decrease to 0
      if (this.selectedAmount === 1) {
        return
      }

      this.$router.push({
        query: {
          amount: this.selectedAmount - 1
        }
      })
    },
    increaseAmount () {
      this.$router.push({
        query: {
          amount: this.selectedAmount + 1
        }
      })
    },
    onUpdateJokesSuccess (res) {
      console.log('onJokeUpdateSuccess called ...')
    },
    onUpdateJokesFail (error) {
      console.log('onJokeUpdateFail called ...')
      console.error(error)
    },
    updateJokes () {
      this.$store.dispatch('fetchJokes', {
        data: {
          genre: this.selectedGenre,
          amount: this.selectedAmount
        },
        success: this.onUpdateJokesSuccess,
        fail: this.onUpdateJokesFail
      })
    }
  },
  watch: {
    '$route.query.amount': function (newValue, oldValue) {
      console.log(`Changing number of jokes from ${oldValue} to ${newValue}`)
      this.updateJokes()
    },
    '$route.params.genre': function (newValue, oldValue) {
      console.log(`Changing genre of jokes from ${oldValue} to ${newValue}`)
      this.updateJokes()
    }
  },
  mounted () {
    this.updateJokes()
  }
}
