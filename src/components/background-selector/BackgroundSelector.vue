<script setup lang="ts">
import { computed, ref, watch } from 'vue'
import { storeToRefs } from 'pinia'
import { useTranslation } from 'i18next-vue'

import { type IBackgroundLayer } from '@/composables/background-layer/background-layer.model'
import useBackgroundLayer from '@/composables/background-layer/background-layer.composable'
import { useThemeStore } from '@/stores/config.store'
import { useMapStore } from '@/stores/map.store'

import BackgroundSelectorItem from './BackgroundSelectorItem.vue'
import type { ThemeNodeModel } from '@/composables/themes/themes.model'

const { t } = useTranslation()
const backgroundLayer = useBackgroundLayer()
const mapStore = useMapStore()
const themeStore = useThemeStore()
const { bgLayer: bgLayerContext } = storeToRefs(mapStore)
const { bgLayers } = storeToRefs(themeStore)

const props = defineProps({
  isOpen: {
    type: Boolean,
    default: false,
  },
})
const isOpen = ref(props.isOpen)
const activeLayerId = computed(
  () => (bgLayerContext.value?.id as number) ?? backgroundLayer.getNullId()
)
const activeLayerName = computed(
  () => bgLayers.value?.find(layer => layer.id === activeLayerId.value)?.name
)

watch(
  () => themeStore.bgLayers,
  () => {
    backgroundLayer.setBgLayer(backgroundLayer.defaultSelectedBgId.value)
  },
  { immediate: true }
)

function setBackgroundLayer(layer: IBackgroundLayer) {
  backgroundLayer.setBgLayer(layer.id)
  isOpen.value = false
}

function toggleSelector() {
  isOpen.value = !isOpen.value
}
</script>

<template>
  <div class="rhino-bg-selector">
    <div
      data-cy="selectedBg"
      class="rhino-bg-sel"
      :class="isOpen === true ? 'hidden' : 'block'"
    >
      <background-selector-item
        :layer="(bgLayerContext as ThemeNodeModel)"
        :aria-expanded="isOpen"
        :bg-title="t('background-selector.tooltip')"
        :bg-name="activeLayerName"
        @click="toggleSelector"
      >
      </background-selector-item>
    </div>
    <div
      data-cy="available-bgs"
      :class="isOpen === true ? 'rhino-bg-selector-opened' : 'hidden'"
    >
      <div
        v-for="layer in bgLayers"
        :key="layer.id"
        class="rhino-bg-sel"
        :class="
          layer.id === activeLayerId
            ? 'border-red-500 border-2'
            : ''
        "
      >
        <background-selector-item
          :layer="layer"
          :bg-name="layer.name"
          @click="setBackgroundLayer(layer)"
        >
        </background-selector-item>
      </div>
    </div>
  </div>
</template>
