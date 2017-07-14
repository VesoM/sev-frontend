<template lang="pug">
  .login-dialog
    .login-forma
      .login-title
        | login
        .login-close X
      .login-email: input(type='email', v-model='email', placeholder='Email')
      .login-password: input(type='password', v-model='password', placeholder='Password')
      .login-submit: button(@click="login") login
</template>

<script>
export default {
  data () {
    return {
      email: '',
      password: ''
    }
  },
  methods: {
    login () {
      this.$http.post('http://localhost:8000/oauth/token')
        .then(function (response) {
          console.log(response)
        })
    }
  }
}
</script>

<style lang="sass">
  .login-dialog
    display: flex
    flex-direction: column
    justify-content: center
    align-items: center
    background-color: rgba(0,0,0,0.5)
    position: fixed
    height: 100%
    width: 100%
  .login-title
    display: flex
    flex-direction: row
    justify-content: space-between
  .login-close
    align-self: flex-start
  .login-forma
    display: flex
    flex-direction: column
    background-color: rgba(255,255,255,1)
    padding: 20px
</style>
