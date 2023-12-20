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
            // HACK: this is a hack to get the keyFeatures to display correctly
            //       the api is storing the keyFeatures as a single string in an array, 
            //       it should parse the single string into an array of strings but its not working correctly.
            //       this is a temporary fix until the api is updated
            for (let product of data) {
                if (product.keyFeatures && product.keyFeatures.length === 1) {
                    product.keyFeatures = product.keyFeatures[0].split(',');
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