<script setup lang="ts">
import { statePersistorLayersService } from '@/services/state-persistor/state-persistor-layers.service'
import { statePersistorLangService } from '@/services/state-persistor/state-persistor-lang.service'

import BackgroundSelector from '@/components/background-selector/BackgroundSelector.vue'
import LayerPanel from '@/components/layer-panel/LayerPanel.vue'
import HeaderItem from './components/header/HeaderItem.vue'
import MapContainer from '@/components/map/MapContainer.vue'
import SearchBar from '@/components/search-bar/SearchBar.vue'
import SideBar from '@/components/side-bar/SideBar.vue'

statePersistorLayersService.bootstrap()
statePersistorLangService.bootstrap()
</script>

<template>
  <div class="rhino-app">
    <header>
      <HeaderItem />
    </header>

    <main>
      <div class="self-center h-auto">
        <SideBar />
      </div>
      <LayerPanel />
      <div class="h-full w-full">
        <BackgroundSelector />
        <MapContainer />
        <SearchBar />
      </div>
    </main>

    <footer></footer>
  </div>
</template>
