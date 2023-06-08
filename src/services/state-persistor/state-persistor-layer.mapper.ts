import { type Layer } from '@/stores/map.store.model'
import useLayers from '@/composables/layers/layers.composable'
import useThemes from '@/composables/themes/themes.composable'

const STORAGE_SEPARATOR = '-'

class StorageLayerMapper {
  layerIdsToLayers(layerIdsText: string | null) {
    const themes = useThemes()
    const layers = useLayers()
    const layerIds = layerIdsText ? layerIdsText.split(STORAGE_SEPARATOR) : []

    return layerIds.map(layerId => {
      const layer = (themes.findById(parseInt(layerId, 10)) as unknown as Layer)

      return layer ? layers.initLayer(layer) : void 0
    })
  }

  layersToLayerIds(layers: Layer[] | null): string {
    return layers?.map(layer => layer.id).join(STORAGE_SEPARATOR) || ''
  }

  layersToLayerOpacities(layers: Layer[] | null): string {
    return (
      layers?.map(layer => layer.opacity ?? 1).join(STORAGE_SEPARATOR) || ''
    )
  }
}

export const storageLayerMapper = new StorageLayerMapper()
