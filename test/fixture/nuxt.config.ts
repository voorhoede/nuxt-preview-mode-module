import { NuxtConfig } from '@nuxt/types';
import previewModeModule from '../../lib/module';

const config: NuxtConfig = {
  target: 'static',

  buildModules: [
    '@nuxt/typescript-build',
    previewModeModule,
  ],
};

export default config;
