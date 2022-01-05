<template>
  <client-only v-if="$nuxt.isPreview">
    <slot>
      <div class="bar">
        <p>You're currently in preview mode</p>
        <preview-mode-exit-button />
      </div>
    </slot>
  </client-only>
</template>

<script>
import PreviewModeExitButton from './PreviewModeExitButton.vue';

export default {
  components: {
    PreviewModeExitButton,
  },
};
</script>

<style scoped>
.bar {
  padding: 16px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: black;
  color: white;
}

p {
  margin: 0;
}
</style>
