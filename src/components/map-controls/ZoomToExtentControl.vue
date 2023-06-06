<script setup lang="ts">
import type { Extent } from 'ol/extent'

import useControl from '@/composables/map-controls/control.composable'
import ZoomToExtent from './zoom-to-extent.model'

const props = defineProps<{
  className?: string
  label?: string
  tipLabel?: string
  extent: Extent
}>()

useControl(ZoomToExtent, props)
</script>

<template>
  <div v-if="false"></div>
</template>
