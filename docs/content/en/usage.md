---
title: Usage
description: ''
position: 3
category: Guide
---

## Methods

### `enter`

Enter preview mode via API: 

```js
this.$previewMode.enter()
```

### `exit`

Exit preview mode via API:

```js
this.$previewMode.exit()
```

## Entering by URL

Enter preview mode via url query parameters:

```
https://mydomain.com?preview=true&previewSecret=mysecret
```

Use your `previewSecret` set in [options](/setup#previewsecret).

## Exit preview mode using `<PreviewModeExitButton>`

```vue
<template>
  <preview-mode-exit-button>
    Exit preview mode
  </preview-mode-exit-button>
</template>

<script>
  import PreviewModeExitButton from '@voorhoede/nuxt-preview-mode-module/lib/components/PreviewModeExitButton.vue';

  export default {
    components: { PreviewModeExitButton },
  };
</script>
```

## `<PreviewModeBar>`

The module comes with a component shown when preview mode is enabled:

![Preview mode bar](/preview-mode-bar.png)

```vue
<template>
  <preview-mode-bar />
</template>

<script>
  import PreviewModeBar from '@voorhoede/nuxt-preview-mode-module/lib/components/PreviewModeBar.vue';
  
  export default {
    components: { PreviewModeBar },
  };
</script>
```

It's contents can be overwritten:

```vue
<template>
  <preview-mode-bar>
    <p>Preview mode is enabled</p>
    <preview-mode-exit-button>Disable</preview-mode-exit-button>
  </preview-mode-bar>
</template>

<script>
  import PreviewModeBar from '@voorhoede/nuxt-preview-mode-module/lib/components/PreviewModeBar.vue';
  import PreviewModeExitButton from '@voorhoede/nuxt-preview-mode-module/lib/components/PreviewModeExitButton.vue';
  
  export default {
    components: { PreviewModeBar, PreviewModeExitButton },
  };
</script>
```

