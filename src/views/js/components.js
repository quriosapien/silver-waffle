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
