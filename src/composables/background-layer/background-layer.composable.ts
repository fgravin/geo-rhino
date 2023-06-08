import { computed } from 'vue'
import { bgConfigFixture } from '@/__fixtures__/background.config.fixture'

import useLayers from '@/composables/layers/layers.composable'
import type { Layer } from '@/stores/map.store.model'
import { useMapStore } from '@/stores/map.store'
import { useThemeStore } from '@/stores/config.store'
import {
  BLANK_BACKGROUNDLAYER,
  type BgLayerDefaultsType,
} from '@/composables/background-layer/background-layer.model'
import useThemes from '@/composables/themes/themes.composable'

export default function useBackgroundLayer() {
  const theme = useThemes()
  const mapStore = useMapStore()
  const layers = useLayers()
  const defaultSelectedBgId = computed(() => {
    const theme_name = useThemeStore().theme?.name
    if (theme_name) {
      const defaultBgLayers = bgConfigFixture()
        .bg_layer_theme_defaults as BgLayerDefaultsType
      return defaultBgLayers[theme_name] || getDefaultSelectedId()
    }
    return getDefaultSelectedId()
  })

  function setBgLayer(layerId: number) {
    const newBgLayer = theme.findBgLayerById(layerId) as Layer
    setMapBackground(newBgLayer || null)
  }

  function setMapBackground(bgLayer: Layer | null) {
    if (bgLayer) {
      layers.handleExclusionLayers(bgLayer)
      mapStore.setBgLayer(layers.initLayer(bgLayer))
    } else {
      mapStore.setBgLayer(null)
    }
  }

  function getDefaultSelectedId() {
    return (
      // getBgLayersFromConfig().find(l => l.is_default)?.id ||
      BLANK_BACKGROUNDLAYER.id
    )
  }

  function getNullId() {
    return BLANK_BACKGROUNDLAYER.id
  }

  function getBgLayersFromConfig() {
    return bgConfigFixture().bg_layers
  }

  return {
    setBgLayer,
    setMapBackground,
    getBgLayersFromConfig,
    getNullId,
    getDefaultSelectedId,
    defaultSelectedBgId,
  }
}
