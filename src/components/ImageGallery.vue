<template>
    <section class="my-3 xl:w-[80vw] xl:flex xl:flex-col xl:m-auto">
        <header v-if="props.title" class="flex flex-row justify-start items-end mx-3">
            <h2 class="text-start text-2xl md:text-3xl lg:text-4xl mx-2 ">{{props.title}}</h2> 
        </header>
        <article ref="productContainer" class="flex flex-row flex-wrap justify-center items-center mx-2">
            <div v-for="(image, index) in props.images" :key="index" class="flex-shrink-0 min-w-fit w-full md:w-1/2 lg:w-1/3 xl:w-1/4 m-2 p-2 rounded-md bg-slate-800">
                <v-lazy-image :src="image.url" :alt="image.alt" class="w-full h-auto rounded-md" />
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

//TODO: update styling of images and containers 
//TODO: remove unneccessary styling
</script>