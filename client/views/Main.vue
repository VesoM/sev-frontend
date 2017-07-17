<template lang="pug">
  .main-layout
    header
      span.title SEV
      nav: ul
        li: a(href="#") Grupe stanova
        li: a(href="#") Korisničke grupe
        li: a(href="#" @click="logout") Odjava
    section: router-view
</template>

<script>
import Counter from 'components/Counter'

export default {
  methods: {
    logout () {
      this.$auth.destroyToken()
      this.$router.push('/')
    }
  }
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
