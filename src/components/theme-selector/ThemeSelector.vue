<script setup lang="ts">
import { computed } from 'vue'
import { storeToRefs } from 'pinia'
import { useTranslation } from 'i18next-vue'

import useThemes from '@/composables/themes/themes.composable'
import { useThemeStore } from '@/stores/config.store'

import DropdownList from '@/components/common/DropdownList.vue'

const { t } = useTranslation()
const themeStore = useThemeStore()
const themesService = useThemes()
const { theme, themes } = storeToRefs(themeStore)
const availableThemes = computed(() =>
  themes.value?.map(theme => ({
    label: t(theme.name),
    value: theme.name,
    ariaLabel: t(`Changer de theme : {{theme}}`, theme.name),
  })) || []
)
const themeName = computed(() => (theme.value?.name || 'theme'))

function setTheme(themeName: string) {
  themesService.setTheme(themeName)
}
</script>

<template>
  <DropdownList
      class="rhino-theme-selector rhino-dropdown"
      :options="availableThemes"
      :placeholder="themeName"
      v-model="themeName"
      @change="setTheme" />
</template>
