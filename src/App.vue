<template>
  <div id="app" class="pdgv+ md-pdgv++ text-center">
    <Intro msg="Les locataires peu nombreux à contester les loyers abusifs"/>
    <CurrentRate url="http://localhost:3000/ref" locale=$locale />
  </div>
</template>

<script>
import Intro from './components/Intro.vue'
import CurrentRate from './components/CurrentRate.vue'

export default {
  name: 'app',
  components: {
    Intro,
    CurrentRate
  }
}
</script>

<style lang="scss">
  @import './scss/main.scss';
</style>
