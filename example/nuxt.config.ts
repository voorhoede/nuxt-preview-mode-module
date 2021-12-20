import { NuxtConfig } from '@nuxt/types';

import { join } from 'path';

const config: NuxtConfig = {
  target: 'static',
  buildModules: [
    '@nuxt/typescript-build',
    join(__dirname, '../lib/module.js'),
  ],
  previewMode: {
    previewSecret: 'secret',
    storageKey: 'preview-data',
  },
};

export default config;
