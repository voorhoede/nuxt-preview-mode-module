# @voorhoede/nuxt-preview-mode-module

[![npm version][npm-version-src]][npm-version-href]
[![npm downloads][npm-downloads-src]][npm-downloads-href]
[![Github Actions CI][github-actions-ci-src]][github-actions-ci-href]
[![License][license-src]][license-href]

Extends Nuxt's built-in preview mode.  
This module only works with Nuxt 2 since at the time of writing this Nuxt 3 does not have a preview mode.

* [📖 Documentation](https://nuxt-preview-mode-module.netlify.app/)

## Features

* 🚪 Enables preview mode through routing (?preview=true)
* 🔒 Secures preview mode with a (client-side) secret (&previewSecret=...)
* 🧠 Persists preview mode through routing & page refresh using storage
* 🎛️ Provides programmatic way to enter() and exit() preview mode
* 🍫 Provides <PreviewModeBar> component to display and control preview mode

## Maintenance

This module is developed by [De Voorhoede](https://www.voorhoede.nl). We will continue to maintain this module as long as we use this in our projects. Feel free to use and fork this module. We will only handle issues or accept pull requests if they aid our projects.

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

[github-actions-ci-src]: https://github.com/voorhoede/nuxt-preview-mode-module/workflows/ci/badge.svg
[github-actions-ci-href]: https://github.com/voorhoede/nuxt-preview-mode-module/actions?query=workflow%3Aci

[license-src]: https://img.shields.io/npm/l/@voorhoede/nuxt-preview-mode-module.svg
[license-href]: https://npmjs.com/package/@voorhoede/nuxt-preview-mode-module
