<template>
    <!-- Container -->
    <main v-if="product" class="p-2 w-full md:w-[90vw] lg:w-[75vw] xl:w-[60vw]  m-auto">
        <header>
            <!-- Product Title -->
            <h1 class="font-bold text-center text-xl py-2"> {{ product.name }} </h1>
            <!-- Product Style Number -->
            <p class="font-bold text-center text-base">Style #: {{ product.styleNumber }}</p>
        </header>

        <section class="flex flex-col md:flex-row justify-center">
            <!-- Image Container -->
            <figure class="flex justify-center min-w-fit">
                <img class="h-[40rem] max-h-[75vh] w-fit object-cover object-center rounded shadow shadow-black" :src="product.imageURL" :alt="product.imageAlt" >
            </figure>
            <!-- Details Container -->
            <div class="flex flex-col border-gray-800 p-2 rounded mx-2">
                <!-- Product Features -->
                <article>
                    <h2 class="font-bold text-lg underline">Style Features</h2>
                    <ul class="list-inside list-disc">
                        <li v-for="feature in product.keyFeatures">{{ feature }}</li>
                    </ul>
                </article>
                <!-- Product Description -->
                <article>
                    <h3 class="font-bold text-lg underline">Style Description</h3>
                    <p>{{ product.description }}</p>
                </article>
                <!-- Product Pricing -->
                <article class="my-2">
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
                </article>
            </div>
        </section>

        <!-- Link to category page -->
        <section class="text-center w-full" v-if="product.type == 'TuxedoSuit'">
            <router-link class="text-lg underline button-class" :to="{ name: 'Category', params: {category : product.type } }">View More Tuxedos & Suit</router-link>
        </section>
        <section class="text-center w-full" v-else-if="product.type">
            <router-link class="text-lg underline button-class" :to="{ name: 'Category', params: {category : product.type } }">View More {{ product.type }}</router-link>
        </section>

    </main>
</template>

<script setup>
import { onMounted, ref, watch } from 'vue';
import { useRoute } from 'vue-router';
import { getProduct } from '../utils/fetchApi';

const props = defineProps({
    id: {
        type: [Number, String],
        required: true
    }
})

const id = ref(parseInt(props.id));
const product = ref({});
const route = useRoute();

onMounted(async () => {
    product.value = await getProduct(id.value);
    console.log(product.value)
})

// Watch for changes in the route parameter and fetch the new product
watch(() => route.params.id, async (newId) => {
    id.value = parseInt(newId);
    product.value = await getProduct(id.value);
});

//TODO: add a share button to share product on social media or via message / email
//TODO: insure this works on iOS
</script>