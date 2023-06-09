<script setup lang="ts">
import { computed, ref } from 'vue'
import { useTranslation } from 'i18next-vue'
import { storeToRefs } from 'pinia'
import {
  Cog8ToothIcon,
  InformationCircleIcon,
  MapPinIcon,
  PencilIcon,
  Square3Stack3DIcon,
  WalletIcon,
  SunIcon,
  MoonIcon
} from '@heroicons/vue/24/outline'

import { useAppStore } from '@/stores/app.store'
import { useMapStore } from '@/stores/map.store'

import DarkMode from './DarkMode.vue'

const appStore = useAppStore()
const mapStore = useMapStore()
const nbSelectedLayers = computed(() => mapStore.layers.length)
const { layersOpen: isLayersExpanded, isCatalogExpanded } = storeToRefs(appStore)
</script>

<template>
  <ul class="rhino-side-bar">
    <li :class="isCatalogExpanded ? 'expanded' : ''">
      <button @click="appStore.setCatalogExpanded(!isCatalogExpanded)" aria-label="toggle catalog">
        <WalletIcon class="rhino-icon" />
      </button>
    </li>
    <li class="relative" :class="isLayersExpanded ? 'expanded' : ''">
      <button @click="appStore.setLayersOpen(!isLayersExpanded)" aria-label="toggle layer manager">
        <span class="absolute bottom-0 right-0 text-[0.65rem]" v-if="nbSelectedLayers"
          >({{ nbSelectedLayers }})</span
        >
        <Square3Stack3DIcon class="rhino-icon" />
      </button>
    </li>
    <li>
      <button @click="() => console.log('To be implemented')" aria-label="draw">
        <PencilIcon class="rhino-icon" />
      </button>
    </li>
    <li>
      <button @click="() => console.log('To be implemented')" aria-label="location">
        <MapPinIcon class="rhino-icon" />
      </button>
    </li>
    <li>
      <button @click="() => console.log('To be implemented')" aria-label="settings">
        <Cog8ToothIcon class="rhino-icon" />
      </button>
    </li>
    <li>
      <button @click="() => console.log('To be implemented')" aria-label="information">
        <InformationCircleIcon class="rhino-icon" />
      </button>
    </li>
    <li>
      <DarkMode />
    </li>
  </ul>
</template>
