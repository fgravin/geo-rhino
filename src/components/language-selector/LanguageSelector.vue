<script setup lang="ts">
import { computed, watch } from 'vue'
import { useTranslation } from 'i18next-vue'
import { storeToRefs } from 'pinia'

import { useAppStore } from '@/stores/app.store'
import DropdownList from '@/components/common/DropdownList.vue'

const { i18next, t } = useTranslation()
const { setLang } = useAppStore()
const { lang } = storeToRefs(useAppStore())
const availableLanguages = computed(() =>
  ['en', 'fr'].map((lang) => ({
    label: t(lang),
    value: lang,
    ariaLabel: t(`Changer de langue : {{lang}}`)
  }))
)

watch(lang, (newVal) => {
  i18next.changeLanguage(newVal)
})

function changeLanguages(lang: string) {
  setLang(lang)
}
</script>

<template>
  <div class="relative">
    <DropdownList
      class="rhino-navbar-dropdown rhino-dropdown-inline h-full"
      :options="availableLanguages"
      :placeholder="lang"
      v-model="lang"
      @change="changeLanguages"
    />
  </div>
</template>
