import { join } from 'path';

export default {
  target: 'static',
  buildModules: [
    '@nuxt/typescript-build',
    join(__dirname, '../lib/module.ts'),
  ],
  previewMode: {
    previewSecret: 'secret',
  },
};
