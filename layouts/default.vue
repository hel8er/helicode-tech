<template>
    <div class="min-h-screen">
        <NuxtLoadingIndicator />
        <NavBar />
        <div class="container mx-auto mt-8 max-w-5xl">
            <ContentDoc />
        </div>
        <!-- <Footer /> -->
    </div>
</template>

<style lang="postcss">
html {
    @apply dark:bg-zinc-700
}

body {
    @apply bg-gradient-to-r from-slate-200 to-slate-400;
    @apply dark:bg-gradient-to-br dark:from-slate-600 dark:to-slate-800;
    @apply dark:text-slate-400 text-slate-800
}

h1 {
    @apply text-5xl my-4 underline
}

.bg-main {
    @apply bg-slate-200 dark:bg-slate-800
}

</style>
