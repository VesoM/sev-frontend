<template lang="pug">
  .main-layout
    .header
      nav.navbar
        .navbar-brand
          .navbar-item
            | SEV
          .navbar-burger
            span
            span
            span
        .navbar-menu
          .navbar-start
            .navbar-item
              | it1
          .navbar-end
            .navbar-item
              a(href="#" @click="logout") Odjava ({{authUser.name}})
    .body
      .main: router-view
        | neki sadrzaj
      .aside.aside-1
        aside.menu
          p.menu-label
            | Skupštine
          ul.menu-list
            li
              a Svi vlasnici
            li
              a Izbor skupštine
          p.menu-label
            | Odabrana skupština
          ul.menu-list
            li
              a Podaci o Skupštini
            li
              a Vlasnici
            li
              a Etaže
          p.menu-label
            | Finansije
          ul.menu-list
            li
              a Transakcije
            li
              a Fakture
            li
              a Obračuni
            li
              a Izvještaji
          p.menu-label
            | Pomoć
          ul.menu-list
            li
              a Kontakt
            li
              a Uputstva
    .my-footer
      | @copyright Milic, Veso, Branko
</template>

<script>
  import Counter from 'components/Counter'
  export default {
    data () {
      return {
        authUser: null
      }
    },
    created () {
      this.getAuthenticatedUser()
    },
    methods: {
      getAuthenticatedUser () {
        this.$http.get('/user', {headers: {'Authorization': "Bearer " + this.$auth.getToken()}})
        .then(response => {
          console.log(response)
          this.authUser = response.data
        })
      },
      logout () {
        this.$auth.destroyToken()
        this.$router.push('/')
      }
    }
  }
</script>

<style lang='sass'>
  @import '~bulma/sass/utilities/initial-variables.sass'
  $menu-item-color: #464
  $menu-item-hover-color: #5ea
  @import '~bulma/bulma.sass'
  .main-layout
    display: flex
    flex-direction: column
    height: 100%
    width: 100%
  .navbar
    background-color: #eff
  .my-footer
    flex-basis: 2rem
    flex-shrink: 5
  .body
    flex: 1
    display: flex
    flex-direction: column
    overflow-y: auto
  .aside
    //background-color: #446
    flex: 1 0
    overflow-y: auto
  .main
    flex: 1 0
    background-color: #eee
  .header
    background-color: green

  /* Medium screens */
  @media all and (min-width: 600px)
    /* We tell both sidebars to share a row */
    .body
      flex-direction: row
    .main
      flex: 4 0px
    .aside-1
      order: 1
    .main
      order: 2
    .aside-2
      order: 3
</style>
