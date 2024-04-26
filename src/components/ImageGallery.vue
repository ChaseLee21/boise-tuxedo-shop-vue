<template>
    <!-- Container  -->
    <section class="my-3 xl:w-[80vw] xl:flex xl:flex-col xl:m-auto">
        <!-- Category Title -->
        <header class="flex flex-row justify-start items-end mx-3">
            <h2 class="text-start text-2xl md:text-3xl lg:text-4xl mx-2 ">{{props.title}}</h2> 
        </header>
        <!-- Product Container -->
        <article ref="productContainer" class="flex flex-row flex-wrap justify-center items-center mx-2">
            <!-- Product Images -->
            <div v-for="(image, index) in props.images" :key="index" class="flex-shrink-0 min-w-fit w-full md:w-1/2 lg:w-1/3 xl:w-1/4 m-2 p-2 rounded-md bg-slate-800">
                <img :src="image.url" :alt="image.alt" class="w-full h-auto rounded-md" />
            </div>
        </article>

    </section>
</template>

<style scoped>
</style>

<script setup>
import { ref } from 'vue';

const props = defineProps({
    title: {
        type: String,
        required: true
    },
    images: {
        type: Array,
        required: true
    }
})

const productContainer = ref(null);

</script>