<template>
    <section v-if="product" class="p-2">
        <h2 class="font-bold text-center text-lg py-2"> {{ product.name }} </h2>
        <div class="flex justify-center align-middle">
            <img class="h-auto w-auto object-cover object-center md:h-[35vh] md:w-fit rounded-2xl" :src="product.imageURL" :alt="product.imageAlt" >
        </div>
        <p class="font-bold text-center text-md">Style #: {{ product.styleNumber }}</p>
        <p class="font-bold text-center text-md">{{ product.name }}</p>
        <div class="m-1 border border-black rounded border-opacity-50 p-1">
            <h3 class="font-bold text-lg underline">Pricing</h3>
            <!-- TODO: dynamically display sale retail price or normal retail price  -->
            <p v-if="product.retailPrice" class="font-bold">Retail Price: ${{ product.retailPrice }}</p>
            <p v-if="product.rentalPrice" class="font-bold">Rental Price: ${{ product.rentalPrice }}</p>
        </div>
        <div class="m-1 border border-black rounded border-opacity-50 p-1">
            <h3 class="font-bold text-lg underline">Style Features</h3>
            <ul class="list-inside list-disc">
                <li v-for="feature in product.keyFeatures">{{ feature }}</li>
            </ul>
        </div>
        <div class="m-1 border border-black rounded border-opacity-50 p-1">
            <h3 class="font-bold text-lg underline">Style Description</h3>
            <p>{{ product.description }}</p>
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