<template>
<header class="d-flex justify-content-center">
  <h1 class="text-light">Random Pokémon Comparer</h1>
</header>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'HeaderComponent',
  components: { },
  props: {
  },
});
</script>

<style scoped>
header {
  margin-bottom: 20px;
}
</style>
