<script setup lang="ts">
import { computed, onMounted, type ShallowRef, shallowRef } from 'vue'
import { useTranslation } from 'i18next-vue'
import Sortable, { type SortableEvent } from 'sortablejs'

import { useMapStore } from '@/stores/map.store'
import type { Layer, LayerId } from '@/stores/map.store.model'
import LayerManagerItem from './layer-item/LayerItem.vue'

const { t } = useTranslation()
const mapStore = useMapStore()

const layers = computed(() => [...mapStore.layers].reverse())
const isLayerOpenId: ShallowRef<LayerId | undefined> = shallowRef()
const draggableClassName = 'drag-handle'

onMounted(() => {
  const sortableLayers = document.getElementById('sortable-layers')
  if (sortableLayers) {
    Sortable.create(sortableLayers, {
      dataIdAttr: 'data-id',
      dragClass: 'rhino-sortable-drag',
      ghostClass: 'rhino-sortable-ghost',
      sort: true,
      handle: `.${draggableClassName}`,
      onSort: sortMethod
    })
  }
})

function sortMethod(event: SortableEvent) {
  const items = event.to.children
  mapStore.reorderLayers([...items].map((val) => Number(val.id)).reverse())
}

function changeOpacityLayer(layer: Layer, opacity: number) {
  mapStore.setLayerOpacity(layer.id as number, opacity / 100)
}

function removeLayer(layer: Layer) {
  mapStore.removeLayers(layer.id)
}

function toggleAccordionItem(layer: Layer) {
  isLayerOpenId.value = isLayerOpenId.value !== layer.id ? layer.id : undefined
}
</script>

<template>
  <ul id="sortable-layers">
    <li
      class="mb-2"
      v-for="layer in layers"
      :key="layer.id"
      :id="(layer.id as string)"
      data-cy="myLayer"
    >
      <layer-manager-item
        :draggableClassName="draggableClassName"
        :layer="layer"
        :isOpen="isLayerOpenId === layer.id"
        @clickRemove="removeLayer"
        @clickToggle="toggleAccordionItem"
        @changeOpacity="changeOpacityLayer"
      >
      </layer-manager-item>
    </li>
    <li v-if="layers.length === 0" class="text-center italic">{{ t('No layers') }}</li>
  </ul>
</template>
