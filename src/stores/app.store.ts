import { acceptHMRUpdate, defineStore } from 'pinia'
import { ref } from 'vue'

export const useAppStore = defineStore(
  'app',
  () => {
    const darkModeOn = ref(false)
    const lang = ref('fr')
    const layersOpen = ref(true)
    const isCatalogExpanded = ref(true)
    const styleEditorOpen = ref(false)

    function setLang(language: string) {
      lang.value = language
    }

    function setLayersOpen(open: boolean) {
      layersOpen.value = open
    }

    function setCatalogExpanded(open: boolean) {
      isCatalogExpanded.value = open
    }

    function toggleDarkMode() {
      darkModeOn.value = !darkModeOn.value
    }

    function toggleStyleEditorPanel() {
      styleEditorOpen.value = !styleEditorOpen.value
    }

    function closeStyleEditorPanel() {
      styleEditorOpen.value = false
    }

    return {
      darkModeOn,
      lang,
      layersOpen,
      isCatalogExpanded,
      styleEditorOpen,
      setLang,
      setLayersOpen,
      setCatalogExpanded,
      toggleDarkMode,
      toggleStyleEditorPanel,
      closeStyleEditorPanel
    }
  },
  {}
)

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useAppStore, import.meta.hot))
}
