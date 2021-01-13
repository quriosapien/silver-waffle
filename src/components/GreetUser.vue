<template>
  <section>
    <h2>Hello {{ username }}</h2>
    <ul class="list">
      <li v-for="message in filteredMessages" class="list-item" :key="message.id">
        <p>{{ message.text }}</p>
      </li>
    </ul>
    <button class="toggle-button" @click="toggleMessage">Toggle Message</button>
  </section>
</template>

<script>
export default {
  name: 'GreetUser',
  props: ['username'],
  data: () => ({
    messages: [
      {
        id: 1,
        text: 'The username is passed as a prop from the parent component',
        show: true
      },
      {
        id: 2,
        text: 'These messages are rendered usings loops in VueJs',
        show: true
      },
      {
        id: 3,
        text: 'This component shows a good example of VueComponents, props, loops, methods, class, css, and computed properties.',
        show: true
      },
      {
        id: 4,
        text: 'This message won\'t be shown as the computed property will filter this out.',
        show: false
      },
      {
        id: 5,
        text: 'Click on the button below to show/hide messages',
        show: true
      }
    ]
  }),
  computed: {
    filteredMessages () {
      return this.messages.filter(message => message.show)
    }
  },
  methods: {
    toggleMessage () {
      this.messages[3].show = !this.messages[3].show
      this.$emit('toggle-message', {
        message: 'Data Toggled',
        currentState: this.messages[3].show
      })
    }
  }
}
</script>

<style scoped>

.list {
  text-align: left;
}

.list-item {
  padding: 5px 20px;
  font-size: 20px;
}

.toggle-button {
  border: none;
  font-weight: bold;
  border-radius: 12px;
  padding: 10px 24px;

  font-size: 16px;
  color: white;

  background-color: #2c3e50;
  cursor: pointer;

  transition: background-color, transform 300ms ease-out;
}

.toggle-button:hover {
  transform: scale(1.2);
  background-color: #42b983;
}
</style>
