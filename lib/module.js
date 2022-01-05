import { formatMessage } from './utils';

const DEFAULT_OPTIONS = {
  persistent: true,
  storageType: 'localStorage',
  storageKey: 'nuxt-datocms-preview-data',
};

export default function previewModeModule (moduleOptions) {
  const options = {
    ...DEFAULT_OPTIONS,
    ...moduleOptions,
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
}

// eslint-disable-next-line global-require
export const meta = require('../package.json');
