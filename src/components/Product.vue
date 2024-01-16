<template>
    <section v-if="product" class="p-2">
        <!-- Product Title -->
        <h2 class="font-bold text-center text-xl py-2"> {{ product.name }} </h2>

        <!-- Product Image -->
        <div class="flex justify-center align-middle">
            <img class="h-auto w-auto object-cover object-center md:h-[35vh] md:w-fit rounded-2xl" :src="product.imageURL" :alt="product.imageAlt" >
        </div>

        <!-- Container including: title, style number, and pricing -->
        <div class="m-1 border border-black rounded border-opacity-50 p-1">
            <!-- Second Product Title -->
            <p class="font-bold text-center text-base">{{ product.name }}</p>

            <!-- Product Style Number -->
            <p class="font-bold text-center text-base">Style #: {{ product.styleNumber }}</p>

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

        <!-- Product Features -->
        <div class="m-1 border border-black rounded border-opacity-50 p-1">
            <h3 class="font-bold text-lg underline">Style Features</h3>
            <ul class="list-inside list-disc">
                <li v-for="feature in product.keyFeatures">{{ feature }}</li>
            </ul>
        </div>

        <!-- Product Description -->
        <div class="m-1 border border-black rounded border-opacity-50 p-1">
            <h3 class="font-bold text-lg underline">Style Description</h3>
            <p>{{ product.description }}</p>
        </div>

        <!-- Link to category page -->
        <div class="text-center w-full" v-if="product.type == 'TuxedoSuit'">
            <router-link class="text-lg underline button-class" :to="{ name: 'Category', params: {category : product.type } }">View More Tuxedos & Suit</router-link>
        </div>
        <div class="text-center w-full" v-else-if="product.type">
            <router-link class="text-lg underline button-class" :to="{ name: 'Category', params: {category : product.type } }">View More {{ product.type }}</router-link>
        </div>

    </section>
</template>

<script setup>
import jQuery from 'jquery';
import { computed, onMounted, ref } from 'vue';

const $ = jQuery;

const props = defineProps({
    id: {
        type: [Number, String],
        required: true
    }
})

const id = ref(parseInt(props.id));
const product = ref({});

//TODO: fetch product data from API using id
onMounted(() => {
    $.ajax({
        url: `https://boisetuxedoshop.azurewebsites.net/api/products/${id.value}`,
        method: 'GET',
        success: (data) => {
            if (data.keyFeatures) {
                data.keyFeatures = data.keyFeatures.split(',');
            }
            product.value = data;
            console.log(product.value);
        }
    })
})

</script>