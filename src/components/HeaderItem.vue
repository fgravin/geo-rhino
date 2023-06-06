<script setup lang="ts">
import { useTranslation } from 'i18next-vue'
import { GlobeAltIcon } from '@heroicons/vue/24/solid'

import LanguageSelector from '@/components/language-selector/LanguageSelector.vue'
import ThemeSelector from '@/components/theme-selector/ThemeSelector.vue'

const { t } = useTranslation()
</script>

<template>
    <nav>
        <div><GlobeAltIcon class="rhino-icon w-6 h-6" /> Geo Rhino</div>
        <ul class="flex gap-14">
            <li class="relative min-w-[150px]"><ThemeSelector /></li>
            <li><a href="#">{{ t('header.documentation.label') }}</a></li>
            <li><a href="#">{{ t('header.blog.label') }}</a></li>
        </ul>
        <div class="flex gap-4">            
            <ul class="flex gap-4">
                <li><a href="#">{{ t('header.login.label') }}</a></li>
                <li><a class="rhino-btn primary" href="#">{{ t('header.signup.label') }}</a></li>
            </ul>
            <div>
                <LanguageSelector data-cy="langSelect" class="flex-none h-full" />
            </div>
        </div>
    </nav>
</template>