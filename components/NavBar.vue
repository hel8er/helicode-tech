<template>
    <div>
        <div class="navbar">
            <div class="flex-1 flex-wrap">
                <NuxtLink to="/" class="btn btn-ghost normal-case text-xl">
                    <Icon name="ph:code-bold" />
                </NuxtLink>
                <NuxtLink to="/folio" class="btn btn-ghost">Портфолио</NuxtLink>

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