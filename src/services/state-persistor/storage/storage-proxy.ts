import { urlStorage } from './url-storage'

class StorageProxy implements Storage {
  get length() {
    throw new Error('Method not implemented.')
    return 0
  }

  clear(): void {
    throw new Error('Method not implemented.')
  }

  key(index: number): string | null {
    throw new Error('Method key() not implemented. ' + index)
  }

  removeItem(key: string) {
    urlStorage.removeItem(key)
  }

  setItem(key: string, value: string) {
    this.setValue(key, value)
  }

  getItem(key: string) {
    return this.getValue(key)
  }

  get paramKeys() {
    return urlStorage.getSnappedParamsAsObj()
  }

  getValue(key: string) {
    return urlStorage.getItem(key)
  }

  setValue(key: string, value: string) {
    urlStorage.setItem(key, value)
  }
}

export const storageProxy = new StorageProxy()
