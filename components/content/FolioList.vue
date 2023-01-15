<template>
  <div class="flex flex-wrap justify-between my-16">
    <ContentList path="/folio" v-slot="{ list }">
      <div v-for="_case in list" :key="_case._path">
        <div class="card w-80 bg-base-100 shadow-xl">
          <figure><nuxt-img :src="`/img/folio/${_case.cover}`" alt="alt" />
          </figure>
          <div class="card-body">
            <h2 class="card-title">
              {{ _case.title }}
              <!-- <div class="badge badge-secondary">NEW</div> -->
            </h2>
            <p>{{ _case.description }}</p>
            <div class="card-actions justify-end">
              <div v-for="tag in _case.tags">
                <div class="badge badge-outline">{{ tag }}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </ContentList>
  </div>

</template>