# @voorhoede/nuxt-preview-mode-module

[![npm version][npm-version-src]][npm-version-href]
[![npm downloads][npm-downloads-src]][npm-downloads-href]
[![Github Actions CI][github-actions-ci-src]][github-actions-ci-href]
[![Codecov][codecov-src]][codecov-href]
[![License][license-src]][license-href]

Extends Nuxt's built-in preview mode:

* 🚪 Enables preview mode through routing (?preview=true)
* 🔒 Secures preview mode with a (client-side) secret (&secret=...)
* 🧠 Persists preview mode through routing & page refresh using storage
* 🎛️ Provides programmatic way to enter() and exit() preview mode
* 🍫 Provides <PreviewModeBar> component to display and control preview mode

## Setup

1. Add `@voorhoede/nuxt-preview-mode-module` dependency to your project

```bash
yarn add @voorhoede/nuxt-preview-mode-module # or npm install @voorhoede/nuxt-preview-mode-module
```

2. Add `@voorhoede/nuxt-preview-mode-module` to the `modules` section of `nuxt.config.js`

```js
{
  modules: [
    // Simple usage
    '@voorhoede/nuxt-preview-mode-module',

    // With options
    ['@voorhoede/nuxt-preview-mode-module', {
      previewSecret: 'mySecret'
    }]
  ]
}
```

## Options

You can pass different options using the `previewMode` property in your `nuxt.config.js`:

```js
export default {
  previewMode: {
    // Preview mode options go here
  },
}
```

### `previewSecret`

* Required: `true`

String to match `previewSecret` query parameter to.

### `persistent`

* Default: `true`

Boolean defining whether to persist preview mode, using local storage (or session storage).

### `storageType`

* Default: `localStorage`
* Can be either `localStorage` or `sessionStorage`

### `storageKey`

* Default: `nuxt-datocms-preview-data`
* String setting the storage key for persisting preview data in localstorage or session storage.

## Components

There's some customizable components you can use:

### PreviewModeBar

Component rendering showing the user preview mode is enabled, with a button to disable.

```vue
<template>
  <div>
    <!-- Default preview bar -->
    <preview-mode-bar />
    <!-- Customized preview bar, through slots -->
    <preview-mode-bar>
      Preview mode: enabled.
      <preview-mode-exit-button>Exit</preview-mode-exit-button>
    </preview>
  </div>
</template>

<script>
import PreviewModeBar from '@voorhoede/nuxt-preview-mode-module/lib/components/PreviewModeBar.vue';
import PreviewModeExitButton from '@voorhoede/nuxt-preview-mode-module/lib/components/PreviewModeExitButton.vue';

export default {
  components: { PreviewModeBar },
};
</script>
```

### PreviewModeExitButton

Component to disable preview mode.

```vue
<template>
  <preview-mode-exit-button>Exit</preview-mode-exit-button>
</template>

<script>
import PreviewModeExitButton from '@voorhoede/nuxt-preview-mode-module/lib/components/PreviewModeExitButton.vue';

export default {
  components: { PreviewModeExitButton },
};
</script>
```

## Development

1. Clone this repository
2. Install dependencies using `yarn install` or `npm install`
3. Start development server using `npm run dev`

## License

[MIT License](./LICENSE)

Copyright (c) Voorhoede

<!-- Badges -->
[npm-version-src]: https://img.shields.io/npm/v/@voorhoede/nuxt-preview-mode-module/latest.svg
[npm-version-href]: https://npmjs.com/package/@voorhoede/nuxt-preview-mode-module

[npm-downloads-src]: https://img.shields.io/npm/dt/@voorhoede/nuxt-preview-mode-module.svg
[npm-downloads-href]: https://npmjs.com/package/@voorhoede/nuxt-preview-mode-module

[github-actions-ci-src]: https://github.com/git@github.com:voorhoede/nuxt-preview-mode-module.git/workflows/ci/badge.svg
[github-actions-ci-href]: https://github.com/git@github.com:voorhoede/nuxt-preview-mode-module.git/actions?query=workflow%3Aci

[codecov-src]: https://img.shields.io/codecov/c/github/git@github.com:voorhoede/nuxt-preview-mode-module.git.svg
[codecov-href]: https://codecov.io/gh/git@github.com:voorhoede/nuxt-preview-mode-module.git

[license-src]: https://img.shields.io/npm/l/@voorhoede/nuxt-preview-mode-module.svg
[license-href]: https://npmjs.com/package/@voorhoede/nuxt-preview-mode-module
