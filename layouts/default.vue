<template>
    <div>
    <NavBar />
        <div class="container mx-auto px-16 max-w-5xl">
            <!-- <NuxtPage /> -->
            <ContentDoc />
        </div>
    </div>
</template>

<style lang="postcss">
html {
    @apply dark:bg-zinc-700
}

body {
    @apply bg-gradient-to-r from-slate-200 to-slate-400;
    @apply dark:bg-gradient-to-r dark:from-gray-700 dark:to-zinc-700;
    @apply dark:text-slate-400 text-slate-800
  }

h1 {
    @apply text-xl
}

.bg-main {
    @apply bg-slate-200 dark:bg-slate-800
}
</style>
