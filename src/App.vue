<template>
  <div id="app" class="pdgv+ md-pdgv++ text-center container">
    <Intro />
    <div class="grid grid--center">
      <CurrentRate url="http://localhost:3000/ref" />
      <DiscountCalculator :rate="$store.state.reference"/>
    </div>
  </div>
</template>

<script>
import Intro from './components/Intro.vue'
import CurrentRate from './components/CurrentRate.vue'
import DiscountCalculator from './components/DiscountCalculator.vue'

export default {
  name: 'app',
  components: {
    Intro,
    CurrentRate,
    DiscountCalculator
  }
}
</script>

<style lang="scss">
  @import './scss/main.scss';
</style>
