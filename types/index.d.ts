export enum StorageType {
  localStorage = 'localStorage',
  sessionStorage = 'sessionStorage',
}

interface PreviewModeOptions {
  previewSecret: string,
  persistant: boolean,
  storageType: StorageType
}

interface PreviewModePlugin {
  enter(data?: object): void,
  exit(): void,
}

declare module '@nuxt/vue-app' {
  interface Context {
    $previewMode: PreviewModePlugin
  }
  interface NuxtAppOptions {
    $previewMode: PreviewModePlugin
  }
}

// Nuxt 2.9+
declare module '@nuxt/types' {
  interface Context {
    $previewMode: PreviewModePlugin
  }

  interface NuxtAppOptions {
    $previewMode?: PreviewModePlugin
  }

  interface Configuration {
    previewMode?: PreviewModeOptions
  }
}

declare module 'vue/types/vue' {
  interface Vue {
    $previewMode: PreviewModePlugin
  }
}
