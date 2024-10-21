<template>
    <!-- Container  -->
    <section class="my-3 xl:w-[80vw] xl:flex xl:flex-col xl:m-auto">
        <!-- Category Title -->
        <header class="flex flex-row justify-start items-end mx-3">
            <h2 class="text-start text-2xl md:text-3xl lg:text-4xl mx-2 ">{{props.title}}</h2> 
            <router-link class="text-base underline button-class" :to="{ name: 'Category', params: {category : props.route } }">View All</router-link>
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
            <div class="sm:flex sm:flex-col md:h-full md:grid md:grid-flow-row md:grid-cols-2 md:w-[90%] lg:w-[80%] xl:grid-cols-4 md:mx-auto mb-8">
                <article v-for="product in props.products" class="min-w-fit my-5 mx-1 rounded-md snap-center relative">
                    <router-link :to="{ name: 'Product', params: {id: product.id } }" class="hover:text-lg hover:ease-in-out hover:duration-500" >
                        <figure class=" text-white text-center h-full">
                            <v-lazy-image width="720" height="1200" :src="product.imageURL" :alt="product.imageAlt" class="m-auto min-w-full min-h-full rounded object-cover" />
                            <figcaption v-if="product.formattedName" class="absolute top-0 inset-x-0 w-full p-0.5 text-lg rounded-t bg-opacity-30 m-auto bg-black">{{ product.formattedName }}</figcaption>
                            <figcaption v-else class="absolute top-0 inset-x-0 w-full p-0.5 text-lg rounded-t bg-opacity-30 m-auto bg-black">{{ product.name }}</figcaption>
                            <figcaption class="absolute bottom-0 inset-x-0 w-full p-0.5 rounded-b bg-opacity-30 m-auto bg-black ">View Style Details</figcaption>
                        </figure>
                    </router-link>
                </article>
            </div>
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
import VLazyImage from 'v-lazy-image';

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