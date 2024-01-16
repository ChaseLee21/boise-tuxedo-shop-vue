<template>
    <h1>Category Page</h1>
</template>

<script setup>
import jQuery from 'jquery';
import { computed, onMounted, ref } from 'vue';

const $ = jQuery;

const props = defineProps({
    category: {
        type: String,
        required: true
    }
})

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
            filterProducts();

        }
    })
}

function filterProducts() {
    products.value = products.value.filter(product => product.type === props.category);
    console.log(products.value);
}

</script>