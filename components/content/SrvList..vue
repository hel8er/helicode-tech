<template>
  <div class="flex flex-wrap justify-around my-16">
    <ContentList path="/services/" v-slot="{ list }">
      <div v-for="srv in list" :key="srv._path" class="card w-80 mt-8  bg-slate-200 dark:bg-slate-900 shadow-xl">
        <figure><img :src="`/img/folio/${srv.cover}`" /></figure>
        <div class="card-body">
          <NuxtLink :to=srv._path>
            <h2 class="card-title">{{ srv.title }}</h2>
          </NuxtLink>
          <p>{{ srv.description }}</p>
          <div class="card-actions justify-end">
            <div v-for="tag in srv.tags" class="badge badge-outline">{{ tag }}</div>
          </div>
        </div>
      </div>

    </ContentList>
  </div>

</template>