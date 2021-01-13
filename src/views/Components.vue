<template>
  <main class="components">
    <h1>Components Example</h1>
    <GreetUser :username="user" @toggle-message="toggleMessageListener"></GreetUser>
  </main>
</template>

<script>
import GreetUser from '@/components/GreetUser'

export default {
  name: 'Components',
  components: {
    GreetUser
  },
  data: () => ({
    user: 'Bruce Wayne'
  }),
  methods: {
    toggleMessageListener (payload) {
      console.log(' @@ \'toggle-message\' event emitted from child component with following payload')
      console.log(payload)
    }
  }
}
</script>

<style>

</style>
