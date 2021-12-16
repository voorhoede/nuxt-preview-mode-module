export enum StorageType {
  localStorage = 'localStorage',
  sessionStorage = 'sessionStorage',
}

export interface Options {
  previewSecret: string,
  persistant: boolean,
  storageType: StorageType
}
