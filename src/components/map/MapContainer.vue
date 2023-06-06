<script setup lang="ts">
import { onMounted, provide, ref } from 'vue'

import useMap from '@/services/map/map.service'
import { OlSynchronizer } from '@/services/map/ol.synchronizer'

import AttributionControl from '../map-controls/AttributionControl.vue'
import FullscreenControl from '../map-controls/FullscreenControl.vue'
import ZoomControl from '../map-controls/ZoomControl.vue'
import ZoomToExtentControl from '../map-controls/ZoomToExtentControl.vue'

const map = useMap()
const mapContainer = ref(null)
const olMap = map.createMap()

const DEFAULT_EXTENT = [2485071.58, 1074261.72, 2837119.8, 1299941.79];

onMounted(() => {
  if (mapContainer.value) {
    new OlSynchronizer(olMap)
    olMap.setTarget(mapContainer.value)

    // Direct access to olMap for cypress
    ;(window as any).olMap = olMap
  }
})

provide('olMap', olMap)
</script>

<template>
  <div data-cy="mapContainer" ref="mapContainer" class="h-full w-full bg-white border">
    <zoom-control />
    <zoom-to-extent-control :extent="DEFAULT_EXTENT" />
    <fullscreen-control />
    <attribution-control />
  </div>
</template>
