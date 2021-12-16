import { Module } from '@nuxt/types';

import { StorageType, Options } from '../index.d';
import { formatMessage } from './utils';

const { resolve } = require('path');

const DEFAULT_OPTIONS = {
  persistant: true,
  storageType: StorageType.localStorage,
};

const previewModeModule: Module<Options> = function getModule () {
  const options: Options = {
    ...DEFAULT_OPTIONS,
    ...this.options.previewMode,
  };

  if (!options.previewSecret) {
    throw new Error(formatMessage('previewSecret must be defined'));
  }

  this.addPlugin({
    src: resolve(__dirname, 'plugin.client.ts'),
    options,
  });
};

export default previewModeModule;
// eslint-disable-next-line global-require
export const meta = require('../package.json');
