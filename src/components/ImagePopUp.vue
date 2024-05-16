<template>
    <section v-if="popUpOpen" class="fixed inset-0 bg-slate-800 bg-opacity-30 rounded m-auto h-screen w-fit px-8 pb-10 flex justify-center items-center">
        <figure class="max-h-[600px] w-auto flex flex-col items-center shadow-xl rounded border border-black relative" >
            <svg v-on:click="popUpOpen = !popUpOpen" xmlns="http://www.w3.org/2000/svg" width="50" height="50" class="stroke-black stroke-2 absolute right-0 top-0 cursor-pointer hover:stroke-[3px]">
                    <line x1="13" y1="15" x2="32" y2="30"></line>
                    <line x1="13" y1="30" x2="32" y2="15"></line> 
            </svg>
            <figcaption class="text-xl lg:text-2xl font-bold py-2 bg-white w-full text-center">Burgundy</figcaption>
            <img width="600" height="600" :src="testImageUrl" alt="Burgundy Pocket Square" class="" />
        </figure>
    </section>
</template>
<script setup>
import {ref} from 'vue';
let popUpOpen = ref(true);

</script>