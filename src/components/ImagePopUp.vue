<template>
    <section v-if="popUpOpen" class="fixed inset-0 bg-slate-800 bg-opacity-30 rounded m-auto h-screen w-screen px-8 pb-10 flex justify-center items-center">
        <figure class="max-h-[600px] w-auto flex flex-col items-center shadow-xl relative" >
            <svg v-on:click="handlePopUpClose()" xmlns="http://www.w3.org/2000/svg" width="15" height="15" class="stroke-slate-800 stroke-2 m-4 absolute right-0 top-0 cursor-pointer hover:stroke-[3px]">
                    <line x1="0" y1="0" x2="15" y2="15"></line>
                    <line x1="0" y1="15" x2="15" y2="0"></line> 
            </svg>
            <figcaption class="text-xl lg:text-2xl font-bold py-2 bg-white w-full text-center rounded-t">{{ props.title }}</figcaption>
            <img width="600" height="600" :src="props.url" :alt="props.alt" class="rounded-b" />
        </figure>
    </section>
</template>
<script setup>
import {ref, defineEmits} from 'vue';

const props = defineProps({
    url: {
        type: String,
        required: true
    },
    alt: {
        type: String,
        required: true
    },
    title: {
        type: String,
        required: true
    }
})

const emit = defineEmits(['PopUpClosed']);

let popUpOpen = ref(true);

function handlePopUpClose() {
    popUpOpen.value = !popUpOpen.value;
    emit('PopUpClosed');
}

</script>