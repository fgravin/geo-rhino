<script setup lang="ts">
import Attribution from 'ol/control/Attribution'
import useControl from '@/composables/map-controls/control.composable'

const props = withDefaults(
  defineProps<{
    className?: string
    collapsed?: boolean
    collapsible?: boolean
  }>(),
  {
    className: 'geo-rhino',
    collapsed: false,
    collapsible: false
  }
)

useControl(Attribution, props)
</script>

<template>
  <div v-if="false"></div>
</template>
