<template lang="pug">
div
  p.red {{ hello }}
  button(@click="h") Click me
</template>

<script lang="ts">
import Vue from 'vue';
import { mapState, mapMutations } from 'vuex';

export default Vue.extend({
  computed: mapState(['hello']),
  methods: {
    ...mapMutations({
      h: 'hello',
    }),
  },
});
</script>

<style scoped>
.red {
  color: red
}
</style>
