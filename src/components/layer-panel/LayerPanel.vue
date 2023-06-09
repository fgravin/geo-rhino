<script setup lang="ts">
import { computed } from 'vue'
import { storeToRefs } from 'pinia'
import { useTranslation } from 'i18next-vue'
import { Square3Stack3DIcon, WalletIcon } from '@heroicons/vue/24/outline'

import { useAppStore } from '@/stores/app.store'
import { useMapStore } from '@/stores/map.store'

import LayerManager from '@/components/layer-manager/LayerManager.vue'
import CatalogTree from '@/components/catalog/CatalogTree.vue'

const { t } = useTranslation()
const appStore = useAppStore()
const mapStore = useMapStore()
const nbSelectedLayers = computed(() => mapStore.layers.length)
const { layersOpen: isLayersExpanded, isCatalogExpanded } = storeToRefs(appStore)
</script>

<template>
  <div class="rhino-layer-panel" data-cy="layerPanel">
    <h2 class="text-lg ml-2">
      <WalletIcon class="rhino-icon mr-1" />
      {{ t('panel.title.catalog') }}
    </h2>
    <CatalogTree v-if="isCatalogExpanded" />

    <h2 class="text-lg ml-2">
      <Square3Stack3DIcon class="rhino-icon mr-1" />
      {{ t('panel.title.layers') }}
      <span class="text-sm" v-if="nbSelectedLayers">({{ nbSelectedLayers }})</span>
    </h2>
    <LayerManager data-cy="myLayers" v-if="isLayersExpanded" class="text-sm" />
  </div>
</template>
