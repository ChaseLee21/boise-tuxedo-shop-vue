<template>
    <Header v-if="props.category === 'TuxedoSuit'" title="Tuxedos & Suits" />
    <Header v-else :title="props.category" />
    <main class="m-3 xl:w-[80vw] xl:flex xl:flex-col xl:m-auto">
        <section class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3">
            <!-- Product Card -->
            <article class="flex flex-col justify-evenly bg-gray-800 text-white text-center font-bold m-4 px-3 shadow-lg shadow-black rounded items-center" v-for="product in filterProducts">
                <router-link class="w-full flex flex-col justify-center items-center" 
                :to="{ name: 'Product', params: {id: product.id } }">
                    <p class="p-1 text-lg md:text-xl lg:text-2xl">{{ product.name }}</p>
                    <img class="h-[40rem] max-h-[75vh] w-fit object-cover object-center rounded shadow shadow-black" :src="product.imageURL" :alt="product.imageAlt" >
                </router-link>

                <!-- Pricing -->
                <div v-if="product.retailPrice && !product.saleRetailPrice && !product.rentalPrice" class="">
                    <p>Purchase Price: ${{ product.retailPrice }}</p>
                </div>
                <div v-if="product.retailPrice && product.saleRetailPrice && !product.rentalPrice" class="flex justify-between w-full px-2">
                    <p>Purchase Price: <span class="line-through">${{ product.retailPrice }}</span></p>
                    <p class="text-red-600">On Sale: ${{ product.saleRetailPrice }}</p>
                </div>
                <div v-if="product.retailPrice && !product.saleRetailPrice && product.rentalPrice" class="flex justify-between w-full px-2">
                    <p>Purchase Price: ${{ product.retailPrice }}</p>
                    <p>Rental Price: ${{ product.rentalPrice }}</p>
                </div>
                <div v-if="product.retailPrice && product.saleRetailPrice && product.rentalPrice" class="flex justify-between w-full px-2 text-center">
                    <p>Purchase Price: <span class="line-through">${{ product.retailPrice }}</span></p>
                    <p class="text-red-600">On Sale: ${{ product.saleRetailPrice }}</p>
                    <p >Rental Price: ${{ product.rentalPrice }}</p>
                </div>
                <div v-if="product.rentalPrice && !product.retailPrice && !product.saleRetailPrice">
                    <p>Rental Price: ${{ product.rentalPrice }}</p>
                </div>
            </article>
        </section>
    </main>
</template>

<script setup>
import { onMounted, computed, ref } from 'vue';
import Header from '../components/Header.vue';

const props = defineProps({
    category: {
        type: String,
        required: true
    }
})

onMounted(() => {
    getProducts();
})

const products = ref([]);

const filterProducts = computed(() => { 
    if (products.length === 0) return;
    else return products.value.filter(product => product.type === props.category);
});

async function getProducts() {
    const reponse = await fetch('https://boisetuxedoshop.azurewebsites.net/api/products');
    const data = await reponse.json();
    for (let product of data) {
        if (product.keyFeatures) {
            product.keyFeatures = product.keyFeatures.split(',');
        }
    }
    products.value = data;
}
</script>