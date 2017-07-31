<template lang="pug">
  .main-layout
    header
      span.title Skupština etažnih vlasnika
      nav: ul
        li: router-link(to="/login") Prijava
        li: router-link(to="/register") Registracija
    section
</template>

<script>
  export default {
  }
</script>

<style lang='sass'>
  .main-layout
    height: 100%
    width: 100%
    display: flex
    flex-direction: column
    justify-content: flex-start
  .title
    font-size: 2rem
  header
    flex: 0 0 3rem
    display: flex
    flex-flow: row wrap
    justify-content: flex-start
    align-items: center
    nav ul
      flex: 1 0 2.5rem
      display: flex
      flex-flow: row wrap
      list-style-type: none
      li
        padding: 5px
  section
    height: 100%
    width: 100%
    display: flex
    flex-direction: column
    justify-content: center
    align-items: center
</style>
