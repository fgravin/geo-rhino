import { acceptHMRUpdate, defineStore } from 'pinia'
import { ref } from 'vue'

export const useAppStore = defineStore(
  'app',
  () => {
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

    function toggleStyleEditorPanel() {
      styleEditorOpen.value = !styleEditorOpen.value
    }

    function closeStyleEditorPanel() {
      styleEditorOpen.value = false
    }

    return {
      lang,
      layersOpen,
      isCatalogExpanded,
      styleEditorOpen,
      setLang,
      setLayersOpen,
      setCatalogExpanded,
      toggleStyleEditorPanel,
      closeStyleEditorPanel,
    }
  },
  {}
)

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useAppStore, import.meta.hot))
}
