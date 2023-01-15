<template>
    <div>
        <div class="navbar">
            <div class="flex-1 flex-wrap">
                <a class="btn btn-ghost normal-case text-xl">
                    <NuxtLink to="/"><Icon name="ph:code-bold" /></NuxtLink>
                </a>
                <NuxtLink to="/folio">Портфолио</NuxtLink>

            </div>
            <div class="flex-none space-x-2">
                <ColormodeSwitch />
                <ContactsDropdown />
            </div>
        </div>
        <FeedbackModal />
    </div>
</template>

<style lang="postcss" scoped>
.navbar {
    @apply rounded-full bg-base-100 dark:bg-slate-800
}
</style>