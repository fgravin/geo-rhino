<script setup lang="ts">
import { type ShallowRef, shallowRef, watchEffect } from 'vue'

import useLayers from '@/composables/layers/layers.composable'
import { type ThemeNodeModel } from '@/composables/themes/themes.model'
import { useConfigStore } from '@/stores/config.store'
import { useMapStore } from '@/stores/map.store'
import LayerTreeNode from '@/components/layer-tree/LayerTreeNode.vue'
import { themesToLayerTree } from '@/components/layer-tree/layer-tree.mapper'
import type { LayerTreeNodeModel } from '@/components/layer-tree/layer-tree.model'
import { layerTreeService } from '@/components/layer-tree/layer-tree.service'

const mapStore = useMapStore()
const themeStore = useConfigStore()
const layers = useLayers()
const layerTree: ShallowRef<LayerTreeNodeModel | undefined> = shallowRef()

watchEffect(updateLayerTree)

function updateLayerTree() {
  if (themeStore.theme && mapStore.layers) {
    const treeModel =
      layerTree.value && (layerTree.value.id as unknown as number) === themeStore.theme?.id
        ? layerTree.value
        : themesToLayerTree(themeStore.theme as ThemeNodeModel)

    layerTree.value = layerTreeService.updateLayers(
      treeModel as LayerTreeNodeModel,
      mapStore.layers
    )
  }
}

function toggleParent(node: LayerTreeNodeModel) {
  layerTree.value = layerTreeService.toggleNode(
    node.id,
    layerTree.value as LayerTreeNodeModel,
    'expanded'
  )
}

function toggleLayer(node: LayerTreeNodeModel) {
  layers.toggleLayer(+node.id, !node.checked)
}
</script>

<template>
  <layer-tree-node
    v-if="layerTree"
    :node="layerTree"
    :key="layerTree.id"
    @toggle-parent="toggleParent"
    @toggle-layer="toggleLayer"
  ></layer-tree-node>
</template>
