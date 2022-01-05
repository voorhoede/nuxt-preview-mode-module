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
{
  modules: [
    '@voorhoede/nuxt-preview-mode-module'
  ],
  previewMode: {
    // Options
  }
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

