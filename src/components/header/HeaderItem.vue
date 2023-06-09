<script setup lang="ts">
import { useTranslation } from 'i18next-vue'

import LanguageSelector from '@/components/language-selector/LanguageSelector.vue'
import ThemeSelector from '@/components/theme-selector/ThemeSelector.vue'
import LucideUser from '@/components/icons/UserIcon.vue'
import MaterialSymbolsSettingsRounded from '@/components/icons/EllipsisIcon.vue'
import MaterialSymbolsContactSupport from '@/components/icons/QuestionIcon.vue'

const { t } = useTranslation()
</script>

<template>
  <div class="flex justify-between h-16">
    <div class="grow flex items-center mx-12">
      <img
        src="/logo-rhino.png"
        class="mr-2 w-7 h-7 inline-block"
        aria-label="logo"
        alt="geo-rhino"
      />
      Geo Rhino
    </div>
    <nav class="m-0 p-0 flex gap-1">
      <div class="relative flex flex-col items-center justify-center cursor-pointer">
        <ThemeSelector />
      </div>
      <div class="rhino-header-icon text-2xl">
        <LanguageSelector data-cy="langSelect" class="flex-none h-full" />
      </div>
      <div class="rhino-header-icon">
        <LucideUser></LucideUser>
      </div>
      <div class="rhino-header-icon">
        <MaterialSymbolsContactSupport></MaterialSymbolsContactSupport>
      </div>
      <div class="rhino-header-icon">
        <MaterialSymbolsSettingsRounded></MaterialSymbolsSettingsRounded>
      </div>
    </nav>
  </div>
</template>
