<script setup lang="ts">
import { computed } from 'vue'
import { useTranslation } from 'i18next-vue'
import { storeToRefs } from 'pinia'
import { Cog8ToothIcon, InformationCircleIcon, MapPinIcon, PencilIcon, Square3Stack3DIcon, WalletIcon } from '@heroicons/vue/24/outline'

import { useAppStore } from '@/stores/app.store'
import { useMapStore } from '@/stores/map.store'

const appStore = useAppStore()
const mapStore = useMapStore()
const nbSelectedLayers = computed(() => mapStore.layers.length)
const { layersOpen: isLayersExpanded, isCatalogExpanded } = storeToRefs(appStore)
</script>

<template>
    <ul class="rhino-side-bar">
        <li :class="isCatalogExpanded ? 'expanded' : ''">
            <button @click="appStore.setCatalogExpanded(!isCatalogExpanded)">
                <WalletIcon class="rhino-icon" />
            </button>
        </li>
        <li class="relative" :class="isLayersExpanded ? 'expanded' : ''">
            <button @click="appStore.setLayersOpen(!isLayersExpanded)">
                <span class="absolute bottom-0 right-0 text-[0.65rem]" v-if="nbSelectedLayers">({{ nbSelectedLayers }})</span>
                <Square3Stack3DIcon class="rhino-icon" />
            </button>
        </li>
        <li><PencilIcon class="rhino-icon" /></li>
        <li><MapPinIcon class="rhino-icon" /></li>
        <li><Cog8ToothIcon class="rhino-icon" /></li>
        <li><InformationCircleIcon class="rhino-icon" /></li>
    </ul>
</template>