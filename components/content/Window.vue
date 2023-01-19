<template>
    <div class="mockup-window border bg-base-300">
  <div class="flex justify-center px-4 py-16 bg-base-200">
    <ContentSlot :use="$slots.default" />
  </div>
</div>
</template>