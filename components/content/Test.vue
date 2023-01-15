<script setup>
defineProps(['image'])
</script>

<template>
    <div>
        <div class="p-10">
            <div class="relative w-[500px]">
                <img :src="[image]" />
                <div class="card-body">
                    <slot />
                </div>
            </div>
        </div>
    </div>
</template>



<style lang="postcss" scoped>
.card-body {
    @apply absolute bottom-0 left-0 right-0 px-4 py-2 bg-gray-800 opacity-70
}
</style>