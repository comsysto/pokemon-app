<template>
  <footer class="d-flex flex-wrap justify-content-center align-items-center">
    <p>made by Benno and Fabian.</p>
    <a href="https://comsystoreply.de" class="hyperlink">Comsysto Reply</a>
    <a href="https://pokeapi.co" class="hyperlink">Pokéapi</a>
    <a href="https://www.gethalfmoon.com" class="hyperlink">Halfmoon</a>
    <a href="https://vuejs.org" class="hyperlink">Vue.js</a>
  </footer>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'FooterComponent',
  components: { },
  props: {
  },
});
</script>

<style scoped>
a, p {
  margin-right: 10px;
}

</style>
