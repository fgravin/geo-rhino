<script setup lang="ts">
import { computed } from 'vue'

import { useLayer } from '@/composables/layer'
import { type Layer } from '@/stores/map.store.model'
import { type IBackgroundLayer } from '@/composables/background-layer/background-layer.model'

const props = defineProps<{
  showEditButton: boolean
  layer: Layer | IBackgroundLayer
}>()

const emit = defineEmits<{
  (e: 'clickEdit'): void
  (e: 'clickInfo'): void
}>()

const { t, onClickInfo } = useLayer(props.layer, { emit })

const txtTitleLabel = computed(() =>
  t('Display informations for "{{layerName}}"', {
    ns: 'client',
    layerName: getLabel()
  })
)

function getLabel() {
  return t(props.layer.name)
}
</script>

<template>
  <span class="rhino-layer-manager-item mt-2.5">
    <button class="fa fa-info w-3" :title="txtTitleLabel" @click="onClickInfo"></button>
    <span class="flex-1 text-left cursor-default">{{ getLabel() }}</span>
    <button
      v-if="showEditButton"
      class="fa fa-pencil"
      :title="t('Open editor panel')"
      @click="$emit('clickEdit')"
    ></button>
  </span>
</template>
