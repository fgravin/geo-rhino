<script setup lang="ts">
import { useTranslation } from 'i18next-vue'
import { computed } from 'vue'
import { ChevronDownIcon, ChevronRightIcon, StopIcon } from '@heroicons/vue/24/outline'
import { StopIcon as SolidStopIcon } from '@heroicons/vue/24/solid'

import type { LayerTreeNodeModel } from './layer-tree.model'

const props = defineProps<{
  node: LayerTreeNodeModel
}>()
const emit = defineEmits<{
  (e: 'toggleLayer', node: LayerTreeNodeModel): void
  (e: 'toggleParent', node: LayerTreeNodeModel): void
}>()

const { t } = useTranslation()
const isParent = !!props.node.children
const isRoot = props.node.depth === 0
const isMaxDepth = props.node.depth >= 10
const label = computed(() => t(props.node.name, { ns: 'client' }))
const hasChildrenSelected = computed(() => props.node.children?.find(child => child.checked))

function toggleLayer(node: LayerTreeNodeModel) {
  emit('toggleLayer', node)
}

function toggleParent(node: LayerTreeNodeModel) {
  emit('toggleParent', node)
}
</script>

<template>
  <div
    class="mb-px text-sm"
    :class="node.depth > 1 ? 'ml-5' : ''"
    v-if="isParent" key="node.id">
    <button
      v-if="node.depth === 1"
      aria-label="first level layer group"
      class="group node-1 w-full text-left flex px-2 my-1.5 uppercase truncate items-center bg-slate-100 dark:bg-slate-800"
      :aria-expanded="node.expanded"
      @click="toggleParent(node)"
      :data-cy="`parentLayerLabel-${node.id}`"
    >
      <ChevronRightIcon v-if="!node.expanded" class="rhino-icon mr-1" />
      <ChevronDownIcon v-if="node.expanded" class="rhino-icon mr-1" />

      <StopIcon v-if="!hasChildrenSelected" class="rhino-icon mr-1" />
      <SolidStopIcon v-if="hasChildrenSelected" class="rhino-icon mr-1 text-blue-500" />

      <span class="w-48">{{ label }}</span>
      <div class="leading-6">
        <div
          class="fa fa-sharp fa-solid"
          :class="node.expanded ? 'fa-caret-up' : 'fa-caret-down'"
        ></div>
      </div>
    </button>

    <button
      v-else-if="node.depth > 1 && !isMaxDepth"
      aria-label="deeper level layer group"
      class="w-full text-left flex px-2 my-1.5 pl-2 truncate items-center bg-slate-50 dark:bg-slate-900"
      :aria-expanded="node.expanded"
      @click="toggleParent(node)"
      :data-cy="`parentLayerLabel-${node.id}`"
    >
      <ChevronRightIcon v-if="!node.expanded" class="rhino-icon mr-1" />
      <ChevronDownIcon v-if="node.expanded" class="rhino-icon mr-1" />

      <StopIcon v-if="!hasChildrenSelected" class="rhino-icon mr-1" />
      <SolidStopIcon v-if="hasChildrenSelected" class="rhino-icon mr-1 text-indigo-400" />

      <div class="grow">{{ label }}</div>
      <div class="leading-6">
        <div
          class="fa-sharp fa-solid"
          :class="node.expanded ? 'fa-minus' : 'fa-plus'"
        ></div>
      </div>
    </button>

    <div
      v-if="!isMaxDepth"
      :class="[
        { 'rhino-collapse': !isRoot },
        { expanded: !isRoot && node.expanded },
      ]"
    >
      <layer-tree-node
        v-for="child in node.children"
        :key="child.id"
        :node="child"
        @toggle-parent="toggleParent($event)"
        @toggle-layer="toggleLayer($event)"
      ></layer-tree-node>
    </div>
  </div>

  <div v-else class="flex ml-7 mr-2">
    <button
      class="w-full text-left truncate"
      aria-label="toggle layer"
      :class="{ 'text-indigo-700': node.checked }"
      @click="toggleLayer(node)"
      :data-cy="`layerLabel-${node.id}`"
      :title="label"
    >
      <StopIcon v-if="!node.checked" class="rhino-icon mr-1" />
      <SolidStopIcon v-if="node.checked" class="rhino-icon mr-1 text-indigo-400" />

      <span class="ml-1 hover:underline">{{ label }}</span>
    </button>
  </div>
</template>
