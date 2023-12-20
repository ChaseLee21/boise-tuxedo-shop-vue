<template>
    <TuxedosAndSuits :tuxedoAndSuitProducts = tuxedoAndSuitProducts />
</template>

<script setup>
import TuxedosAndSuits from './products/TuxedosAndSuits.vue';
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
            products.value = data;
        }
    })
}

const tuxedoAndSuitProducts = computed(() => {
    return products.value.filter(product => product.type === "TuxedoSuit");
})


</script>