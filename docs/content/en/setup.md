---
title: Setup
description: ''
position: 2
category: Guide
---

Check the [Nuxt.js documentation](https://nuxtjs.org/guides/configuration-glossary/configuration-modules) for more information about installing and using modules in Nuxt.js.

## Installation

Add `@voorhoede/nuxt-preview-mode-module` dependency to your project:

<code-group>
  <code-block label="Yarn" active>

  ```bash
  yarn add @voorhoede/nuxt-preview-mode-module
  ```

  </code-block>
  <code-block label="NPM">

  ```bash
  npm install @voorhoede/nuxt-preview-mode-module
  ```

  </code-block>
</code-group>

Then, add `@voorhoede/nuxt-preview-mode-module` to the `modules` section of `nuxt.config.js`:

```js[nuxt.config.js]
export default {
  modules: [
    '@voorhoede/nuxt-preview-mode-module'
  ],
  previewMode: {
    // preview secret is required and has no default:
    previewSecret: 'add your own secret here',
    // other options with their default values:
    persistent: true,
    storageType: 'localStorage',
    storageKey: 'nuxt-datocms-preview-data',
  }
}
```

or using shorthand options:
```js[nuxt.config.js]
export default {
  modules: [
    ['@voorhoede/nuxt-preview-mode-module', {
      // preview secret is required and has no default:
      previewSecret: 'add your own secret here',
      // other options with their default values:
      persistent: true,
      storageType: 'localStorage',
      storageKey: 'nuxt-datocms-preview-data',
    }]
  ],
}
```

## Options

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

