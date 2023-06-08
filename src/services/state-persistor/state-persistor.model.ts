import { UrlStorage } from './storage/url-storage'

export const SP_KEY_LANG = 'lang'
export const SP_KEY_LAYERS = 'layers'

export type ParamKeys = { [key: string]: string }
export type StatePersistorStorage = Storage | UrlStorage
export interface StatePersistorService {
  bootstrap(): void
  persist(): void
  restore(): void
}
