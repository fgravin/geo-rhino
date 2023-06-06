<script setup lang="ts">
import Zoom from 'ol/control/Zoom'
import useControl from '@/composables/map-controls/control.composable'

const props = defineProps<{
  className?: string
  zoomInLabel?: string
  zoomOutLabel?: string
}>()

useControl(Zoom, props)
</script>

<template>
  <div v-if="false"></div>
</template>
