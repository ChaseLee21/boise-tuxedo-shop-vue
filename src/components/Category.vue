<template>
    <section class="m-3">
        <!-- Category Title -->
        <h2 v-if="props.category == 'TuxedoSuit'" class="text-center md:text-start text-4xl md:text-5xl lg:text-6xl mx-2 "> Tuxedos & Suits </h2>
        <h2 v-else class="text-center md:text-start text-4xl md:text-5xl lg:text-6xl mx-2 "> {{ props.category }} </h2>
        <!-- Products Container -->
        <div class="grid grid-cols-1 md:grid-cols-4">
            <div class="flex flex-col m-2 border border-black rounded items-center" v-for="product in filterProducts">
                <!-- Product Image & Title w/ Router Link -->
                <router-link 
                class="text-center font-bold text-xl md:text-2xl lg:text-3xl " 
                :to="{ name: 'Product', params: {id: product.id } }">
                    <p class="p-1">{{ product.name }}</p>
                    <img class="h-auto w-auto object-cover object-center md:h-[35vh] md:w-fit" :src="product.imageURL" :alt="product.imageAlt" >
                </router-link>
                <!-- Pricing -->
                <div v-if="product.retailPrice && !product.saleRetailPrice && !product.rentalPrice" class="">
                    <p class="font-bold">Purchase Price: ${{ product.retailPrice }}</p>
                </div>
                <div v-if="product.retailPrice && product.saleRetailPrice && !product.rentalPrice" class="flex justify-between w-full px-2">
                    <p class="font-bold">Purchase Price: <span class="line-through">${{ product.retailPrice }}</span></p>
                    <p class="font-bold text-red-600">On Sale: ${{ product.saleRetailPrice }}</p>
                </div>
                <div v-if="product.retailPrice && !product.saleRetailPrice && product.rentalPrice" class="flex justify-between w-full px-2">
                    <p class="font-bold">Purchase Price: ${{ product.retailPrice }}</p>
                    <p class="font-bold">Rental Price: ${{ product.rentalPrice }}</p>
                </div>
                <div v-if="product.retailPrice && product.saleRetailPrice && product.rentalPrice" class="flex justify-between w-full px-2 text-center">
                    <p class="font-bold">Purchase Price: <span class="line-through">${{ product.retailPrice }}</span></p>
                    <p class="font-bold text-red-600">On Sale: ${{ product.saleRetailPrice }}</p>
                    <p class="font-bold">Rental Price: ${{ product.rentalPrice }}</p>
                </div>
                <div v-if="product.rentalPrice && !product.retailPrice && !product.saleRetailPrice">
                    <p class="font-bold">Rental Price: ${{ product.rentalPrice }}</p>
                </div>
                
            </div>
        </div>

    </section>
</template>

<script setup>
import jQuery from 'jquery';
import { onMounted, computed, ref } from 'vue';

const $ = jQuery;

// Props containing category name
const props = defineProps({
    category: {
        type: String,
        required: true
    }
})

// On mount, get products from API
onMounted(() => {
    getProducts();
})

// Holds all products and is used to filter products by category
const products = ref([]);

// property that holds all products that match the current category [props.category]
const filterProducts = computed(() => { 
    if (products.length === 0) return;
    else return products.value.filter(product => product.type === props.category);
});

// Get products from API using jQuery ajax call
async function getProducts() {
    await $.ajax({
        url: 'https://boisetuxedoshop.azurewebsites.net/api/products',
        type: 'GET',
        dataType: 'json',
        success: function(data) {
            for (let product of data) {
                if (product.keyFeatures) {
                    product.keyFeatures = product.keyFeatures.split(',');
                }
            }
            products.value = data;
        }
    })
}
</script>