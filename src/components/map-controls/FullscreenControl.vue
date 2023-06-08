<script setup lang="ts">
import FullScreen from 'ol/control/FullScreen'
import useControl from '@/composables/map-controls/control.composable'

const props = defineProps<{
  className?: string
  label?: string
  labelActive?: string
}>()

useControl(FullScreen, props)
</script>

<template>
  <div v-if="false"></div>
</template>
