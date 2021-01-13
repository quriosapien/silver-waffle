export default {
  name: 'GreetUser',
  props: ['username'],
  data: () => ({
    messages: [
      {
        id: 1,
        text: 'The username is passed as a prop from the parent component and component emits event to parent',
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
