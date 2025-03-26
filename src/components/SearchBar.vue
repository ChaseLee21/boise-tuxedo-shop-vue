<template >
    <section class="w-full flex justify-center bg-slate-800 pt-2">
        <input class="w-[66%] rounded rounded-e-none p-2" type="search" v-model="searchQuery" v-on:input="onInputChange()" placeholder="Search Boise Tuxedo shop">
        <div class="animate-button">
            <button class="p-1 me-1 rounded rounded-s-none text-white border-2 border-s-0 button-transition bg-black bg-opacity-40 text-xl">Search</button>
        </div>
    </section>
</template>
<script setup>
import { ref, onMounted } from 'vue';
import { formatProductName } from '../utils/helpers'

let searchQuery = ref("")
let products = ref();

onMounted(() => {
    getProducts();
})

function onInputChange() {
    console.log(searchQuery.value)
}

async function getProducts() {
    const reponse = await fetch('https://boisetuxedoshop.azurewebsites.net/api/products');
    const data = await reponse.json();
    for (let product of data) {
        if (product.type === 'TuxedoSuit') {
            product.formattedName = formatProductName(product.name);
        }
        if (product.keyFeatures) {
            product.keyFeatures = product.keyFeatures.split(',');
        }
    }
    products.value = data;
    console.log(products.value)
}
</script>

<style scoped>

.button-transition {
    transition: background .3s ease-in-out, color .3s ease-in-out;
}

.animate-button:hover .button-transition {
    background: #FFFFFFcc;
    color: #000;
}


</style>