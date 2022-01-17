<template>
    <div class="container">
        <h3>{{ stat.name }}</h3>
        <div class="progress-group">
            <div class="progress">
                <div
                    class="progress-bar"
                    :class="progressBarClass"
                    role="progressbar"
                    v-bind:style="{ width: (stat.value / 255 * 100) + '%' }"
                    :aria-valuenow="stat.value"
                    aria-valuemax="255"
                    aria-valuemin="0"
                    :aria-labelledby="`progress-bar-${pokemonId}-value-${stat.name}`"
                >
                </div>
            </div>
            <span :id="`progress-bar-${pokemonId}-value-${stat.name}`" class="progress-group-label">{{ stat.value }}</span>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue';
import PokemonStat from '../models/pokemon-stat';

export default defineComponent({
  name: 'PokemonStatComponent',
  props: {
    stat: Object as PropType<PokemonStat>,
    pokemonId: Number,
  },
  computed: {
    progressBarClass(): string {
      const statName = this.stat?.name;
      if (statName === 'hp') {
        return 'bg-success';
      } if (statName === 'attack') {
        return 'bg-danger';
      } if (statName === 'speed') {
        return 'bg-secondary';
      } if (statName === 'defense') {
        return 'bg-light';
      }
      return '';
    },
  },
});
</script>

<style scoped>
h3 {
    font-size: 15px;
    margin-bottom: 5px;
}

.container {
    margin-bottom: 30px;
}
</style>
