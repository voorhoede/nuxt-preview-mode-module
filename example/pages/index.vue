<template>
  <div>
    <h1>Hello world</h1>
    <p>Preview enabled: {{ $nuxt.isPreview }}</p>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  mounted () {
    this.$previewMode.enter();

    setTimeout(() => {
      this.$previewMode.exit();
    }, 5000);
  },
});
</script>
