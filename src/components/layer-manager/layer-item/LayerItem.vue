<script setup lang="ts">
import { computed, type ShallowRef, shallowRef } from 'vue'
import { Bars2Icon, EllipsisVerticalIcon, EllipsisHorizontalIcon, XMarkIcon } from '@heroicons/vue/24/solid'
import { EyeIcon, EyeSlashIcon } from '@heroicons/vue/24/outline'

import { useLayer } from '@/composables/layer'
import { type Layer } from '@/stores/map.store.model'

const props = defineProps<{
  layer: Layer
  draggableClassName: string
  isOpen: boolean
}>()
const emit = defineEmits([
  'clickInfo',
  'clickEdit',
  'changeOpacity',
  'clickToggle',
  'clickRemove',
])
const { t, getLabel, onClickInfo } = useLayer(props.layer as Layer, { emit })

const opacity: ShallowRef<number | undefined> = shallowRef(
  (props.layer?.opacity ?? 1) * 100
)
const prevOpacity: ShallowRef<number | undefined> = shallowRef(
  ((props.layer?.previousOpacity ?? opacity.value) as number) * 100
)

const txtDraggableLabel = computed(() =>
  t('Sort "{{layerName}}" in the list', {
    ns: 'client',
    layerName: getLabel(),
  })
)
const txtTitleLabel = computed(() =>
  t('Display informations for "{{layerName}}"', {
    ns: 'client',
    layerName: getLabel(),
  })
)
const txtRemoveLayer = computed(() =>
  t('Remove layer "{{layerName}}"', {
    ns: 'client',
    layerName: getLabel(),
  })
)

function onClickToggle() {
  emit('clickToggle', props.layer)
}

function onToggleVisibility() {
  if (opacity.value === 0) {
    opacity.value = prevOpacity.value
  } else {
    prevOpacity.value = opacity.value
    opacity.value = 0
  }

  dispatchChangeOpacity()
}

function onClickRemove() {
  emit('clickRemove', props.layer)
}

function onChangeOpacity(event: Event) {
  if (event.target) {
    opacity.value = parseInt((event.target as HTMLInputElement).value)

    dispatchChangeOpacity()
  }
}

function dispatchChangeOpacity() {
  emit('changeOpacity', props.layer, opacity.value)
}
</script>

<template>
  <div class="rhino-layer-manager-item relative">
    <div class="w-full flex flex-nowrap items-start gap-x-2">
      <button
        class="rhino-icon cursor-move mt-1 ml-2"
        aria-label="drag and drop layer"
        :class="draggableClassName"
        :title="txtDraggableLabel"
      ><Bars2Icon /></button>
      <button
              aria-label="toggle layer"
              :aria-expanded="props.isOpen"
        :aria-controls="`layer-manager-item-content-${props.layer.id}`"
        class="cursor-pointer grow text-left w-[70%] truncate"
        @click="onClickToggle"
      >
        {{ getLabel() }}
      </button>
      <button
              aria-label="toggle layer"
              class="mt-1 w-3.5 rhino-icon"
        @click="onClickToggle"
        :aria-expanded="props.isOpen"
        :aria-controls="`layer-manager-item-content-${props.layer.id}`"
      >
        <EllipsisHorizontalIcon v-if="props.isOpen" />
        <EllipsisVerticalIcon v-if="!props.isOpen" />
      </button>
      <button
        class="mt-1 rhino-icon"
        aria-label="remove layer"
        :title="txtRemoveLayer"
        @click="onClickRemove"
      ><XMarkIcon /></button>
    </div>
    <div
      class="rhino-layer-manager-item-content"
      :class="props.isOpen ? 'h-6' : 'h-0'"
      :id="`layer-manager-item-content-${props.layer.id}`"
    >
      <button
        :title="
          t('Toggle layer opacity for {{layerName}}', {
            layerName: t(props.layer.name),
          })
        "
        aria-label="toggle layer opacity"
        class="w-5 rhino-icon"
        :class="opacity === 0 ? 'fa-eye-slash' : 'fa-eye'"
        @click="onToggleVisibility"
      >
        <EyeIcon v-if="opacity !== 0" />
        <EyeSlashIcon v-if="opacity === 0" />
      </button>
      <input
        :id="`${props.layer.id}-steps-range`"
        type="range"
        min="0"
        max="100"
        :value="opacity"
        step="25"
        @change="onChangeOpacity"
        class="m-2.5 w-16 h-[5px] rounded-lg appearance-none cursor-pointer"
        :aria-label="
          t('Change opacity for {{ layerName }}', { layerName: getLabel() })
        "
      />
    </div>
  </div>
</template>
