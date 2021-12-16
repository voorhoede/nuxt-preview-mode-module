import { Module } from '@nuxt/types';

import { StorageType, Options } from '../index.d';
import { formatMessage } from './utils';

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
    // Nuxt module documentation uses path.resolve,
    // But that would require including `.ts`,
    // which isn't rewritten to `.js` in the typescript build.
    src: require.resolve('./plugin.client'),
    options,
  });
};

export default previewModeModule;
// eslint-disable-next-line global-require
export const meta = require('../package.json');
