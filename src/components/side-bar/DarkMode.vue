<script setup lang="ts">
import { watch } from 'vue'
import { storeToRefs } from 'pinia'
import { SunIcon, MoonIcon } from '@heroicons/vue/24/outline'
import { useAppStore } from '@/stores/app.store'

const appStore = useAppStore()
const { darkModeOn } = storeToRefs(appStore)

watch(darkModeOn, (newVal) => {
  document.body.classList[newVal ? 'add' : 'remove']('dark')
})
</script>

<template>
    <button @click="appStore.toggleDarkMode()" aria-label="toggle dark mode">
        <MoonIcon class="rhino-icon" v-if="!darkModeOn" />
        <SunIcon class="rhino-icon" v-if="darkModeOn" />
    </button>
</template>
