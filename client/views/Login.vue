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
        client_secret: 'A2Yw5pkNscY8h7HeRyAnanGDZHyNKTyImTuSFKva',
        grant_type: 'password',
        username: this.email,
        password: this.password
      }
      this.$http.post('http://localhost:8000/oauth/token', data)
        .then(function (response) {
          console.log(response)
        })
    }
  }
}
</script>

<style lang="sass">
@import "static/modal-dialog.sass"
@import "static/form.sass"
</style>
