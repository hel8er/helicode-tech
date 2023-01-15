<template>
  <div>
    <button aria-label="Color Mode" class="inline-block" @click="onClick">
      <ColorScheme placeholder="...">
        <Icon v-if="colorMode.value === 'dark'" name="heroicons-outline:moon" size="32" />
        <Icon v-else name="heroicons-outline:sun" size="32" />
      </ColorScheme>
    </button>
  </div>
</template>
<script setup>
const colorMode = useColorMode()
const onClick = () => (colorMode.value === 'light' ? (colorMode.preference = 'dark') : (colorMode.preference = 'light'))
</script>