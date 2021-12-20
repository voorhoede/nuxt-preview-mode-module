<template>
  <div>
    <preview-mode-bar />
    <h1>Hello world</h1>
    <p>Preview enabled: {{ $nuxt.isPreview }}</p>
  </div>
</template>

<script>
import PreviewModeBar from '@voorhoede/nuxt-preview-mode-module/lib/components/PreviewModeBar.vue';

export default {
  components: { PreviewModeBar },
};
</script>
