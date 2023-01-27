<template>
    <div class="hero min-h-screen">
  <div class="hero-content flex-col lg:flex-row-reverse">
    <img src="/img/avatar.jpg" class="max-w-sm rounded-lg shadow-2xl" />
    <div>
      <h1 class="text-5xl font-bold">Привет!</h1>
      <p class="py-6">Здесь вы можете ознакомится с моим портфолио. 
        Это проекты которые я реализовывл самостоятельно или работал совместно с другими участниками. 
        Вы можете написать мне в мессенджер по кнопке в правом верхнем углу</p>
       <div class="mt-4 flex justify-end lg:justify-start"> 
      <NuxtLink to="/folio" class="btn btn-primary mx-8">Перейти в портфолио</NuxtLink>
    </div></div>
  </div>
</div>
</template>