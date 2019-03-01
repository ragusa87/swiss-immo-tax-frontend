<template>
  <div class="intro">
    <h1>{{ msg }}</h1>
    <p>
      Savez-vous que votre loyer est lié au taux d’intérêt de référence ? <br>
      Et que lors-ce que celui-ci diminue, le locataire peut faire repercuter cette diminution sur son loyer?
    </p>
    <p>Cette application vous notifie à chaque changement de taux, afin que vous puissiez commencer les démarches administratives</p>
  </div>
</template>

<script>
export default {
  name: 'Intro',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
