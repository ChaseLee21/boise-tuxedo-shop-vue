<template>
    <section class="my-3 xl:w-[80vw] xl:flex xl:flex-col xl:m-auto">
        <header v-if="props.title" class="flex flex-row justify-start items-end mx-3">
            <h2 class="text-start text-2xl md:text-3xl lg:text-4xl mx-2 ">{{props.title}}</h2> 
        </header>
        <article ref="productContainer" class="flex flex-wrap justify-center items-center">
            <div v-for="(image, index) in props.images" :key="index" class="bg-slate-800 m-4 p-1 rounded w-fit h-fit shadow-lg">
                <v-lazy-image :src="image.url" :alt="image.alt" class="rounded xl:max-w-[20vw] lg:max-w-[30vw] md:max-w-[40vw]" />
            </div>
        </article>
    </section>
</template>

<script setup>
import { ref } from 'vue';
import VLazyImage from 'v-lazy-image';

const props = defineProps({
    title: {
        type: String,
        required: false
    },
    images: {
        type: Array,
        required: true
    }
})

const productContainer = ref(null);
</script>