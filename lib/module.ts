import { Module } from "@nuxt/types";
import { formatMessage } from "utils";

const { resolve } = require('path')

enum StorageType {
  localStorage = 'localStorage',
  sessionStorage = 'sessionStorage',
}

interface Options {
  previewSecret: string,
  persistant: boolean,
  storageType: StorageType
}

const DEFAULT_OPTIONS = {
  storageType: StorageType.localStorage
}

const module: Module<Options> = async function () {
  const options: Options = {
    DEFAULT_OPTIONS,
    ...this.options.previewMode,
  };

  if (!options.previewSecret) {
    throw new Error(formatMessage('previewSecret must be defined'));
  }

  this.addPlugin({
    src: resolve(__dirname, 'plugin.js'),
    fileName: '@voorhoede/nuxt-preview-mode-module.js',
    options: {
      previewSecret: options.previewSecret,
    },
  })
}

export default module;
export const meta = require('../package.json');
