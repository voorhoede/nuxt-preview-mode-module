import { NuxtConfig } from '@nuxt/types';

import { join } from 'path';

const config: NuxtConfig = {
  target: 'static',
  buildModules: [
    '@nuxt/typescript-build',
    '@voorhoede/nuxt-preview-mode-module',
  ],
  previewMode: {
    previewSecret: 'secret',
    storageKey: 'preview-data',
  },
};

export default config;
