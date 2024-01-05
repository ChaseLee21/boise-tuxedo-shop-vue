<template>
    <TuxedosAndSuits :tuxedoAndSuitProducts = tuxedoAndSuitProducts />
    <Shirts :shirtProducts = shirtProducts />
</template>

<script setup>
import TuxedosAndSuits from './products/TuxedosAndSuits.vue';
import Shirts from './products/Shirts.vue';
import jQuery from 'jquery';
import { computed, onMounted, ref } from 'vue';

const $ = jQuery;

const products = ref([]);

onMounted(() => {
    getProducts();
})

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

const tuxedoAndSuitProducts = computed(() => {
    return products.value.filter(product => product.type === "TuxedoSuit");
})

const shirtProducts = computed(() => {
    return products.value.filter(product => product.type === "Shirts");
})


</script>