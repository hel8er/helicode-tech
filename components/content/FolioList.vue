<template>
  <div class="flex flex-wrap justify-around my-16">
    <ContentList path="/folio/" v-slot="{ list }">
  <div v-for="_case in list" :key="_case._path" class="card w-80 mt-8  bg-slate-200 dark:bg-slate-900 shadow-xl">
  <figure><img :src="`/img/folio/${_case.cover}`" /></figure>
  <div class="card-body">
    <a :href="`${_case.link}`"><h2 class="card-title">{{ _case.title }}</h2></a>
    <p>{{ _case.description }}</p>
    <div class="card-actions justify-end">
      <div v-for="tag in _case.tags" class="badge badge-outline">{{ tag }}</div> 
    </div>
  </div>
</div> 

    </ContentList>
  </div>
              <!-- <div v-for="tag in _case.tags" class="badge badge-outline">{{ tag }}</div> -->

</template>