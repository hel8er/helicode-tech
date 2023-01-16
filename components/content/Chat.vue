<template>
    <div class="mx-auto max-w-3xl py-32">
        <div class="chat chat-start">
            <div class="chat-image avatar">
                <div class="w-10 rounded-full">
                    <img src="/img/avatar.jpg" />
                </div>
            </div>
            <div class="chat-header">
                Alex Helber
                <time class="text-xs opacity-50">now</time>
            </div>
            <div class="chat-bubble">
                <ContentSlot :use="$slots.default" />
            </div>
            <div class="chat-footer opacity-50">
                Delivered
            </div>
        </div>
    </div>
</template>