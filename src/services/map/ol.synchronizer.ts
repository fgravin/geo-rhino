import { watch } from 'vue'
import type OlMap from 'ol/Map'

import { type Layer } from '@/stores/map.store.model'
import { useMapStore } from '@/stores/map.store'

import useMap from './map.service'
import useOpenLayers from './ol.service'

export class OlSynchronizer {
  previousLayers: Layer[] = []

  constructor(map: OlMap) {
    const mapStore = useMapStore()
    const mapService = useMap()
    const openLayers = useOpenLayers()

    watch(
      () => mapStore.layers,
      async (layers) => {
        const oldContext = {
          layers: this.previousLayers
        }
        const newContext = {
          layers
        }
        const removedLayers = mapService.getRemovedLayers(newContext, oldContext)

        const addedLayerComparisons = mapService.getAddedLayers(newContext, oldContext)

        const mutatedLayerComparisons = mapService.getMutatedLayers(newContext, oldContext)

        removedLayers.forEach((layer) => openLayers.removeLayer(map, layer.id))

        for (const cmp of addedLayerComparisons) {
          await openLayers.addLayer(map, cmp.layer)
        }

        mutatedLayerComparisons.forEach((layer) => {
          openLayers.setLayerOpacity(map, layer.id, layer.opacity as number)
        })

        if (newContext.layers) {
          openLayers.reorderLayers(map, newContext.layers)
        }

        this.previousLayers = layers
      }
    )

    watch(
      () => mapStore.bgLayer,
      (bgLayer) => bgLayer !== undefined && openLayers.setBgLayer(map, bgLayer)
    )
  }
}
