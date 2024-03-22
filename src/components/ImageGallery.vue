<template>
    <!-- Container  -->
    <section class="my-3 xl:w-[80vw] xl:flex xl:flex-col xl:m-auto">
        <!-- Category Title -->
        <header class="flex flex-row justify-start items-end mx-3">
            <h2 class="text-start text-2xl md:text-3xl lg:text-4xl mx-2 ">{{props.title}}</h2> 
        </header>
        <!-- Product Container -->
        <div ref="productContainer" class="relative flex flex-row flex-nowrap overflow-scroll scroll-smooth snap-x snap-mandatory m-0 py-4 w-full scroll-m-[1rem] md:overflow-hidden">
            <!-- Previous Button -->
            <button aria-label="Previous image in carousel" v-if="!isMobile" class="sticky left-0 top-1/2" @click="scroll(-1)">
                <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" class="stroke-black stroke-2 opacity-50 hover:opacity-75">
                        <line x1="10" y1="25" x2="40" y2="10"></line>
                        <line x1="10" y1="25" x2="40" y2="40"></line> 
                </svg>
            </button>
            <!-- Product Card -->
            <article class="flex flex-col snap-center text-center min-w-[90%] md:min-w-[56%] lg:min-w-[28%] mx-2 md:mx-4 my-2 bg-gray-800 text-white rounded shadow-lg shadow-black" v-for="product in props.products">
                <!-- Product Image -->
                <figure class="flex flex-col justify-center items-center w-full my-1 md:my-2 p-2">
                    <img class="h-[40rem] max-h-[75vh] w-fit object-cover object-center rounded shadow shadow-black" :src="product.imageURL" :alt="product.imageAlt" >
                </figure>
            </article>
            <!-- Next Button -->
            <button aria-label="Next image in carousel" v-if="!isMobile" class="sticky top-1/2 right-0" @click="scroll(1)">
                <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" class="stroke-black stroke-2 opacity-50 hover:opacity-75">
                        <line x1="40" y1="25" x2="10" y2="10"></line>
                        <line x1="40" y1="25" x2="10" y2="40"></line> 
                </svg>
            </button>
        </div>

    </section>
</template>

<style scoped>
</style>

<script setup>
import { ref, onMounted } from 'vue';

let isMobile = ref(window.innerWidth < 768);

const props = defineProps({
    products: {
        type: Array,
        required: true
    },
    title: {
        type: String,
        required: true
    },
    route : {
        type: String,
        required: true
    }
})

const productContainer = ref(null);

const scroll = (direction) => {
    const container = productContainer.value;
    const scrollAmount = direction * container.children[2].clientWidth;
    container.scrollLeft += scrollAmount;
    console.log(container.children[2].clientWidth);
}

onMounted(() => {
    console.log(props.title);
})
</script>