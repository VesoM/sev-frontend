<template lang='pug'>
  #app
    .dv1 crvena
      | novi red aaaaaaaaa
    .dv2 plava
      | novi red bbbbbbbb
    .dv3 zelena
      | novi red ccccccc
    router-view
</template>

<style>
body {
  margin: 0;
  font-size: 2rem;
  font-family: -apple-system, BlinkMacSystemFont,
               'avenir next', avenir,
               helvetica, 'helvetica neue',
               Ubuntu,
               'segoe ui', arial,
               sans-serif;
}
.page {
  text-align: center;
  /* nesting for the need to test postcss */
  code {
    background-color: #f0f0f0;
    padding: 3px 5px;
    border-radius: 2px;
  }
}
</style>
<style lang='sass'>
  #app
    height: 100vh
    width: 100vw
    display: flex
    flex-direction: column
    justify-content: center
    align-items: center
  .dv1
    background-color: blue
  .dv2
    background-color: red
  .dv3
    background-color: green
</style>
