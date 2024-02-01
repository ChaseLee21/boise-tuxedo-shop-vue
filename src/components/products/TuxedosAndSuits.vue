<template>
    <!-- Section Container -->
    <section class="m-3 ">
        <!-- Category Title -->
        <div class="flex flex-row justify-start items-end">
            <h2 class="text-start text-2xl md:text-3xl lg:text-4xl mx-2 ">Tuxedos & Suits</h2> 
            <router-link class="text-base underline button-class" :to="{ name: 'Category', params: {category : 'TuxedoSuit' } }">View All</router-link>
        </div>
        <!-- Product Container -->
        <div class="flex flex-row flex-nowrap overflow-scroll scroll-smooth snap-x snap-mandatory m-0 scroll-m-[1rem]">
            <!-- Product Card -->
            <div class="flex flex-col snap-center text-center min-w-[90%] md:min-w-[56%] lg:min-w-[28%] mx-2 md:mx-4 my-2 bg-gray-800 text-white rounded shadow-lg shadow-black" v-for="product in props.tuxedoAndSuitProducts">
                <h3 class="text-2xl">{{ product.name }}</h3>
                <!-- Product Image -->
                <div class="flex justify-center w-full my-1 md:my-2 p-2">
                    <img class="h-[40rem] max-h-[75vh] w-fit object-cover object-center rounded shadow shadow-black" :src="product.imageURL" :alt="product.imageAlt" >
                </div>
                <div class="flex justify-center my-1 md:my-2">
                    <button class="text-white bg-red-600 p-2 rounded inline-block"><router-link :to="{ name: 'Product', params: {id: product.id } }">View Style Details</router-link></button>
                </div>
                <p class="my-1 smd:my-2">Style Number: {{ product.styleNumber }}</p>
            </div>
        </div>

    </section>
</template>

<style scoped>
</style>

<script setup>
const props = defineProps({
    tuxedoAndSuitProducts: {
        type: Array,
        required: true
    }
})
</script>