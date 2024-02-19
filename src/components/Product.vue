<template>
    <!-- Container -->
    <section v-if="product" class="p-2 w-full md:w-[90vw] lg:w-[75vw] xl:w-[60vw]  m-auto">
        <div>
            <!-- Product Title -->
            <h2 class="font-bold text-center text-xl py-2"> {{ product.name }} </h2>
            <!-- Product Style Number -->
            <p class="font-bold text-center text-base">Style #: {{ product.styleNumber }}</p>
        </div>

        <div class="flex flex-col md:flex-row justify-center">
            <!-- Image Container -->
            <div class="flex justify-center min-w-fit">
                <img class="h-[40rem] max-h-[75vh] w-fit object-cover object-center rounded shadow shadow-black" :src="product.imageURL" :alt="product.imageAlt" >
            </div>
            <!-- Details Container -->
            <div class="flex flex-col border-gray-800 p-2 rounded mx-2">
                <!-- Product Features -->
                <div>
                    <h3 class="font-bold text-lg underline">Style Features</h3>
                    <ul class="list-inside list-disc">
                        <li v-for="feature in product.keyFeatures">{{ feature }}</li>
                    </ul>
                </div>
                <!-- Product Description -->
                <div>
                    <h3 class="font-bold text-lg underline">Style Description</h3>
                    <p>{{ product.description }}</p>
                </div>
                <!-- Product Pricing -->
                <div class="my-2">
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
        }
    })
})

//TODO: add a share button to share product on social media or via message / email
//TODO: insure this works on iOS
</script>