<template lang="pug">
  .modal-dialog
    .modal-window
      .modal-head
        .modal-title login
        .modal-close &times;
      .modal-body
        .form-field
          label Email
          input(type='email', v-model='email', placeholder='Email')
        .form-field
          label Pass
          input(type='password', v-model='password', placeholder='Password')
        .modal-submit: button(@click="login") login
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
      var data = {
        client_id: 2,
        client_secret: 'UFvmWWfaxfE9YOXAUh2bBkq02md2tEklGnLyXY9H',
        grant_type: 'password',
        username: this.email,
        password: this.password
      }
      var myself = this
      this.$http.post('http://localhost:8000/oauth/token', data)
        .then(function (response) {
          console.log(response)
          myself.$auth.setToken(response.data.access_token, response.data.expires_in+Date.now())
          myself.$router.push('/main')
        })
    }
  }
}
</script>

<style lang="sass">
@import "static/modal-dialog.sass"
@import "static/form.sass"
</style>
