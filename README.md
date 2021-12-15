# @voorhoede/nuxt-preview-mode-module

[![npm version][npm-version-src]][npm-version-href]
[![npm downloads][npm-downloads-src]][npm-downloads-href]
[![Github Actions CI][github-actions-ci-src]][github-actions-ci-href]
[![Codecov][codecov-src]][codecov-href]
[![License][license-src]][license-href]

> Module enabling persistant preview mode for nuxt

[📖 **Release Notes**](./CHANGELOG.md)

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
    ['@voorhoede/nuxt-preview-mode-module', { /* module options */ }]
  ]
}
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
