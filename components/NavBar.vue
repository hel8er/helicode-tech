<template>
    <div>
        <div class="navbar md:px-16">
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
    @apply bg-slate-200 dark:bg-slate-800
}
</style>