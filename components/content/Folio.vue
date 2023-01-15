<template>
    <div class="flex justify-around flex-wrap">
        <div class="card ">
            <figure><img src="~/assets/img/folio/mapbox.jpg" alt="Shoes" /></figure>
            <div class="card-body">
                <a href="https://meinrussland.com/#map_frame" target="_blank">
                    <h2 class="card-title">Карта для блога</h2>
                </a>
                <p>Интерактивная карта на движке MapBox</p>

            </div>
        </div>
        <div class="card card-compact bg-base-100 shadow-xl ">
            <figure><img src="~/assets/img/folio/fashion.jpg" alt="Shoes" /></figure>
            <div class="card-body">
                <a href="https://www.katerina-angelova.ru/" target="_blank">
                    <h2 class="card-title text-sm">Лендинг для стилиста</h2>
                </a>
                <p class="text-xs">Лендинг с описаний услуг, цен и контактов</p>

            </div>
        </div>
        <div class="card card-compact bg-base-100 shadow-xl">
            <figure><img src="~/assets/img/folio/mgimo.jpg" alt="Shoes" /></figure>
            <div class="card-body">
                <a href="https://odin.mgimo.ru/" target="_blank">
                    <h2 class="card-title">Блог ВУЗа</h2>
                </a>
                <p>Участие в проекте, поддежка портала на Hugo</p>
                <!-- <div class="card-actions justify-end">
                    <button class="btn btn-primary">Buy Now</button>
                </div> -->
            </div>
        </div>
        <div class="card card-compact w-96 bg-base-100 shadow-xl">

            <figure><img src="~/assets/img/folio/itvectura.jpg" alt="Shoes" /></figure>
            <div class="card-body">
                <a href="https://itvectura.com/" target="_blank">
                    <h2 class="card-title">Сайт IT-компании </h2>
                </a>
                <p>Участие в проекте, поддежка caйта на Hugo</p>
                <!-- <div class="card-actions justify-end">
                    <button class="btn btn-primary">Buy Now</button>
                </div> -->
            </div>
        </div>
    </div>
</template>

<style lang="postcss" scoped>
.card {
    @apply card-compact bg-base-100 shadow-xl w-72
}

</style>