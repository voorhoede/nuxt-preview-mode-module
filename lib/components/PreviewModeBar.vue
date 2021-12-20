<template>
  <client-only v-if="$nuxt.isPreview">
    <slot>
      <div>
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
