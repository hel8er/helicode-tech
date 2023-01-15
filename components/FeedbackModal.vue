<template>
    <!-- The button to open modal -->
    <div>
        <!-- Put this part before </body> tag -->
        <input type="checkbox" id="my-modal-3" class="modal-toggle" />
        <div class="modal">
            <div class="modal-box relative">
                <label for="my-modal-3" class="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                <h3 class="text-lg font-bold">Форма обратной связи</h3>
                <!-- <p class="py-4">You've been selected for a chance to get one year of subscription to use Wikipedia for
                    free!</p> -->
                <div class="form-control w-full max-w-xs">
                    <label class="label">
                        <span class="label-text">Ваше имя</span>
                        <!-- <span class="label-text-alt">Alt label</span> -->
                    </label>
                    <input type="text" placeholder="Имя" class="input input-bordered w-full max-w-xs" />

                </div>
                <div class="form-control w-full max-w-xs">
                    <label class="label">
                        <span class="label-text">Контактные данные</span>
                        <!-- <span class="label-text-alt">Alt label</span> -->
                    </label>
                    <input type="text" placeholder="Контакты" class="input input-bordered w-full max-w-xs" />
                    <label class="label">
                        <span class="label-text-alt"></span>

                        <span class="label-text-alt">e-mail, telegram, whatsapp или телефон</span>
                    </label>
                </div>
                <div class="form-control">
                    <label class="label">
                        <span class="label-text">Ваше сообщение</span>
                    </label>
                    <textarea class="textarea textarea-bordered h-24" placeholder="Ваш вопрос"></textarea>

                </div>
                <div class="modal-action">
      <label for="my-modal" class="btn btn-disabled">Отправить!</label>
    </div>
            </div>

        </div>
    </div>

</template>