<template>
  <div>
    <preview-mode-bar />
    <h1>Hello world</h1>
    <p>Preview enabled: {{ $nuxt.isPreview }}</p>
    <a :href="`./?preview=true&previewSecret=${$config.previewSecret}`">
      Enter preview mode through routing
    </a>
    <button @click="$previewMode.enter()">
      Enter preview mode through plugin method
    </button>
    <div />
  </div>
</template>

<script>
import PreviewModeBar from '@voorhoede/nuxt-preview-mode-module/lib/components/PreviewModeBar.vue';

export default {
  components: { PreviewModeBar },
};
</script>
