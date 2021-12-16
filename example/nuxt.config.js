import { join } from 'path';

export default {
  target: 'static',
  buildModules: [
    join(__dirname, '../lib/module.js'),
  ],
  previewMode: {
    previewSecret: 'secret',
  },
};
