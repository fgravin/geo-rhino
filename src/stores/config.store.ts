import { acceptHMRUpdate, defineStore } from 'pinia'
import { computed, ref, shallowRef, type ShallowRef } from 'vue'

import useThemes from '@/composables/themes/themes.composable'
import { type ConfigModel, type OgcServersConfigModel } from '@/composables/themes/themes.model'

export const useThemeStore = defineStore(
  'config',
  () => {
    const themesService = useThemes()
    const config: ShallowRef<ConfigModel | undefined> = shallowRef()
    const themeName = ref('cadastre')
    const themes = computed(() => config.value?.themes)
    const theme = computed(() =>
      themes.value?.find(theme => theme.name === themeName.value)
    )
    const bgLayers = computed(() => config.value?.background_layers.filter(bgLayer => bgLayer.type === 'WMTS') || [])
    const ogcServers: ShallowRef<OgcServersConfigModel | undefined> = computed(() => config.value?.ogcServers)

    themesService.fetchThemes().then(response => (config.value = response))

    function setTheme(name: string) {
      themeName.value = name
    }

    return { config, themes, themeName, theme, bgLayers, ogcServers, setTheme }
  },
  {}
)

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useThemeStore, import.meta.hot))
}
