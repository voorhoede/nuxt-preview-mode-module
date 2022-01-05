<template>
  <div>
    <preview-mode-bar />
    <div class="main-content">
      <h1>Hello world</h1>
      <p>Preview enabled: {{ $nuxt.isPreview }}</p>
      <hr>
      <!-- Wrap content in client only, to prevent issues with hydration -->
      <client-only>
        <preview-mode-exit-button v-if="$nuxt.isPreview">
          Exit preview mode through provided component
        </preview-mode-exit-button>
        <div v-else>
          <p>
            <a :href="`./?preview=true&previewSecret=${$config.previewSecret}`">
              Enter preview mode through routing
            </a>
          </p>
          <p>
            <a :href="`./?preview=true&previewSecret=incorrect`">
              Attempt entering preview mode with incorrect secret
            </a>
          </p>
          <p>
            <button @click="$previewMode.enter()">
              Enter preview mode through plugin method
            </button>
          </p>
        </div>
      </client-only>
    </div>
  </div>
</template>

<script>
import PreviewModeBar from '@voorhoede/nuxt-preview-mode-module/lib/components/PreviewModeBar.vue';
import PreviewModeExitButton from '@voorhoede/nuxt-preview-mode-module/lib/components/PreviewModeExitButton.vue';

export default {
  components: { PreviewModeBar, PreviewModeExitButton },
};
</script>

<style>
body {
  margin: 0;
  font-family: sans-serif;
}

.main-content {
  padding: 16px;
}
</style>
