import { NuxtConfig } from '@nuxt/types';
import { join } from 'path';

// In this example, the preview secret is hardcoded.
// In an actual codebase, it's highly recommended to store the preview secret
// in environment variables.
const PREVIEW_SECRET = 'secret';

const config: NuxtConfig = {
  target: 'static',
  buildModules: [
    '@nuxt/typescript-build',
    '@voorhoede/nuxt-preview-mode-module',
  ],
  publicRuntimeConfig: {
    previewSecret: PREVIEW_SECRET,
  },
  previewMode: {
    previewSecret: PREVIEW_SECRET,
    storageKey: 'preview-data',
  },
};

export default config;
