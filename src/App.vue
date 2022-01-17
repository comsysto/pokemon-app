<template>
  <HeaderComponent></HeaderComponent>
  <main>
    <button
      class="btn btn-lg btn-secondary"
      aria-controls="compare"
      @click="fetchNewPokemon"
    >
      Compare Random Pokémon
    </button>
    <div
      id="compare"
      aria-live="polite"
      aria-atomic="true"
      class="container d-flex flex-wrap justify-content-center"
    >
      <PokemonComponent :pokemon="pokemonA"></PokemonComponent>
      <PokemonComponent :pokemon="pokemonB"></PokemonComponent>
    </div>
  </main>
  <FooterComponent></FooterComponent>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import halfmoon from 'halfmoon';
import FooterComponent from './components/FooterComponent.vue';
import HeaderComponent from './components/HeaderComponent.vue';
import PokemonComponent from './components/PokemonComponent.vue';
import pokemonService from './services/pokemon.service';
import { getRandomPokemonId } from './utils';
import Pokemon from './models/pokemon';

export default defineComponent({
  name: 'App',
  components: {
    FooterComponent,
    HeaderComponent,
    PokemonComponent,
  },
  data() {
    return {
      pokemonA: {} as Pokemon,
      pokemonB: {} as Pokemon,
    };
  },
  async mounted() {
    this.setupUI();
    await this.fetchNewPokemon();
  },
  methods: {

    setupUI(): void {
      halfmoon.onDOMContentLoaded();
      halfmoon.toggleDarkMode();
    },

    async fetchNewPokemon(): Promise<void> {
      const randA = getRandomPokemonId();
      let randB = getRandomPokemonId();
      while (randA === randB) {
        randB = getRandomPokemonId();
      }

      const promisePokemonA = pokemonService.getPokemon(randA);
      const promisePokemonB = pokemonService.getPokemon(randB);

      Promise.all([promisePokemonA, promisePokemonB]).then(([pokemonA, pokemonB]) => {
        this.pokemonA = pokemonA;
        this.pokemonB = pokemonB;
      });
    },
  },
});
</script>

<style scoped>
button {
  display: block;
  margin: 0 auto;
  margin-bottom: 20px;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
</style>
