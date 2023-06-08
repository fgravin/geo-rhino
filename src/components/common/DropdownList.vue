<script setup lang="ts">
import { onMounted, onUnmounted, shallowRef, type ShallowRef } from 'vue'

import { type DropdownOptionModel } from './DropdownList.model'

const props = defineProps<{
  placeholder?: string
  options: DropdownOptionModel[]
  modelValue?: string
}>()
const emit = defineEmits(['change'])
const isOpen: ShallowRef<boolean> = shallowRef(false)
const selectedValue: ShallowRef<string | undefined> = shallowRef()

function toggleDropdown(forceOpen?: boolean) {
  isOpen.value = forceOpen === void 0 ? !isOpen.value : forceOpen
}

function onClickOpenBtn(event: MouseEvent) {
  event.stopImmediatePropagation()
  toggleDropdown()
}

function onClickItem(event: MouseEvent) {
  selectedValue.value = (event.target as HTMLElement).dataset.value
  emit('change', selectedValue.value)
}

function onClickOutsideOpenBtn() {
  toggleDropdown(false)
}

onMounted(() => document.addEventListener('click', onClickOutsideOpenBtn))
onUnmounted(() => document.removeEventListener('click', onClickOutsideOpenBtn))
</script>

<template>
  <div class="rhino-dropdown">
    <div class="h-full">
      <button
        type="button"
        class="rhino-dropdown-btn uppercase"
        :class="isOpen ? 'expanded' : ''"
        :aria-expanded="isOpen"
        aria-haspopup="true"
        @click="onClickOpenBtn"
      >
        <span>{{ props.placeholder ?? props.options[0].label }}</span
        ><span class="rhino-caret ml-2"></span>
      </button>
    </div>
    <div class="rhino-dropdown-wrapper">
      <ul
        class="rhino-dropdown-list"
        :class="isOpen ? '' : 'hidden'"
        tabindex="-1"
      >
        <li
          v-for="option in props.options"
          :key="option.value"
          :class="modelValue === option.value ? 'selected' : ''"
        >
          <button
            class="rhino-dropdown-list-item"
            :aria-label="option.ariaLabel"
            :data-value="option.value"
            @click="onClickItem"
          >
            {{ option.label }}
          </button>
        </li>
      </ul>
    </div>
  </div>
</template>
