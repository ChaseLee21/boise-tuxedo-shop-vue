<template>
    <h2 v-if="props.product">{{ product.name }}</h2>
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

console.log(id.value);

//TODO: update this component to do a get request using the product id to get the product details
//this ensures that the product page can be shared since it will be using the product id to get the product details
</script>