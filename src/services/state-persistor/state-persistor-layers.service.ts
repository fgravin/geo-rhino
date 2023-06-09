import { watch, watchEffect, type WatchStopHandle } from 'vue'
import { storeToRefs } from 'pinia'

import { useMapStore } from '@/stores/map.store'
import { type Layer } from '@/stores/map.store.model'
import { useConfigStore } from '@/stores/config.store'

import { SP_KEY_LAYERS, type StatePersistorService } from './state-persistor.model'
import { storageLayerMapper } from './state-persistor-layer.mapper'
import { storageHelper } from './storage/storage.helper'

class StatePersistorLayersService implements StatePersistorService {
  bootstrap() {
    const themeStore = useConfigStore()
    let stop: WatchStopHandle
    // eslint-disable-next-line prefer-const
    stop = watchEffect(() => {
      if (themeStore.themes) {
        this.restore()
        this.persist()
        stop && stop() // test if exists, for HMR support
      }
    })
  }

  persist() {
    const mapStore = useMapStore()
    const { layers } = storeToRefs(mapStore)

    watch(
      layers,
      (value, oldValue) => {
        if (oldValue !== value) {
          storageHelper.setValue(SP_KEY_LAYERS, value, storageLayerMapper.layersToLayerIds)
        }
      },
      { immediate: true }
    )
  }

  restore() {
    const mapStore = useMapStore()
    const layers = storageHelper.getValue(SP_KEY_LAYERS, storageLayerMapper.layerIdsToLayers)

    mapStore.addLayers(...((layers?.filter((layer) => layer) as Layer[]) || []))
  }
}

export const statePersistorLayersService = new StatePersistorLayersService()
