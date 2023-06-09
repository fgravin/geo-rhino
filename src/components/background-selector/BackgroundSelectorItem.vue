<script setup lang="ts">
import { useTranslation } from 'i18next-vue'
import { computed } from 'vue'

import { type ThemeNodeModel } from '@/composables/themes/themes.model'

const { t } = useTranslation()

const props = withDefaults(
  defineProps<{
    bgTitle?: string
    bgName?: string
    layer?: ThemeNodeModel
  }>(),
  {
    bgTitle: '',
    bgName: ''
  }
)

const buttonTitle = computed(() => {
  const localizedTitle = t(props.bgTitle)
  const hasTitle = props.bgTitle.length > 0
  const localizedLayerName = t(props.bgName)
  return `${localizedTitle}${hasTitle ? ' - ' : ''}${localizedLayerName}`
})

const buttonClasses = computed(
  () => `h-full w-full rhino-bg-sel-icon
        rhino-bg-sel-${props.bgName}
        bg-${props.bgName}_sm
        md:bg-${props.bgName}
        hd:bg-${props.bgName}_sm_hi
        hd_md:bg-${props.bgName}_hi`
)
</script>

<template>
  <button
    :title="buttonTitle"
    :class="buttonClasses"
    class="break-all text-xs"
    aria-label="background"
    :style="{
      background: `no-repeat url('${props.layer?.metadata?.thumbnail}')`,
      'background-size': 'cover'
    }"
  >
    {{ t(props.bgName) }}
  </button>
</template>
