<template>
  <section :aria-label="pokemon.name" aria-atomic="true" :id="'pokemon-' + pokemon.id">
    <div class="w-400 mw-full">
      <div class="card">
        <h2 class="card-title" :id="'pokemon-name-' + pokemon.id">
            {{ pokemon.name }}
        </h2>
        <img :src="pokemon.imageUrl" class="img-fluid" :alt="pokemon.name">
        <section class="type-container" aria-label="Types">
            <span v-for="type in pokemon.types" :key="type" class="badge badge-pill">{{ type }}</span>
        </section>
        <section aria-label="Stats">
          <PokemonStatComponent v-for="stat in pokemon.stats" :key="stat.name" :pokemonId="pokemon.id" :stat="stat"></PokemonStatComponent>
        </section>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue';
import Pokemon from '../models/pokemon';
import PokemonStatComponent from './PokemonStatComponent.vue';

export default defineComponent({
  name: 'PokemonComponent',
  components: {
    PokemonStatComponent,
  },
  props: {
    pokemon: Object as PropType<Pokemon>,
  },
});
</script>

<style scoped>
h2::first-letter {
  text-transform: uppercase;
}
.badge {
    margin-right: 5px;
}

img {
    position: absolute;
    right: 0;
    top: 0;
}

.type-container {
    margin-bottom: 30px;
}
</style>
