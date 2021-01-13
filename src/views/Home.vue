<template>
  <main class="home">
    <h1>This is Home Page</h1>
    <Counter
      :count="count"
      class="classFromParent">
    </Counter>
  </main>
</template>

<script>
// @ is an alias to /src
import Counter from '@/components/home/Counter'

export default {
  name: 'Home',
  components: {
    Counter
  },
  data: () => ({
    count: 1
  }),
  methods: {
    increaseCount () {
      this.count++
    }
  }
}
</script>

<style scoped>
.classFromParent {
  margin: 10px 0px 0px;
}
</style>
