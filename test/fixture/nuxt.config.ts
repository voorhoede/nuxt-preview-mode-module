import { NuxtConfig } from '@nuxt/types';
import previewModeModule, { StorageType } from '../../lib/module';

const config: NuxtConfig = {
  target: 'static',

  buildModules: [
    '@nuxt/typescript-build',
    previewModeModule,
  ],

  previewMode: {
    previewSecret: 'my_secret',
    persistant: true,
    storageType: StorageType.localStorage,
  },
};

export default config;
