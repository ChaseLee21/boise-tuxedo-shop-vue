<template>
    <header class="my-3 xl:w-[80vw] xl:flex xl:flex-col xl:m-auto">
        <h1 class="my-2 text-start text-2xl md:text-3xl lg:text-4xl mx-2 font-bold underline" >Rent or Buy</h1>
        <p class="text-start md:text-lg lg:text-xl ms-5 my-2">
            Not only do we value helping you look good for your big event but we think it is important to do it your way.
            Whether you are wanting to rent or buy your outfit, we have you covered at Boise Tuxedo Shop.
            Our rental package for both tuxedos and suits includes 5 pieces: jacket, pants, shirt, vest, and your choice of tie, bowtie, or suspenders.
            You may upgrade your rental package to include shoes or cufflinks for an additional fee.
        </p>
    </header>
    <main>
        <FeaturedProducts :products = tuxedoAndSuitProducts :title = tuxedoAndSuit.title :route = tuxedoAndSuit.route />
        <FeaturedProducts :products = shirtProducts :title = shirts.title :route = shirts.route />
        <FeaturedProducts :products = pantProducts :title = pants.title :route = pants.route />
    </main>
</template>

<script setup>
import FeaturedProducts from './FeaturedProducts.vue';
import jQuery from 'jquery';
import { computed, onMounted, ref } from 'vue';

const $ = jQuery;

const tuxedoAndSuit = {
    title: "Tuxedos & Suits",
    route: "TuxedoSuit"
} 

const shirts = {
    title: "Shirts",
    route: "Shirts"
}

const pants = {
    title: "Pants",
    route: "Pants"
} 

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
    let arr = products.value.filter(product => product.type === "TuxedoSuit");
    while (arr.length > 6) {
        arr.pop();
    }
    return arr;
})

const shirtProducts = computed(() => {
    let arr = products.value.filter(product => product.type === "Shirts");
    while (arr.length > 6) {
        arr.pop();
    }
    return arr;
})

const pantProducts = computed(() => {
    let arr = products.value.filter(product => product.type === "Pants");
    while (arr.length > 6) {
        arr.pop();
    }
    return arr;
})

// TODO: implement a featured products method
// for this to work I would need to update the database to include a featured column
// if the featured column is true then the product would be displayed on the RentOrBuy page
// if the featured column is false then the product would not be displayed on the RentOrBuy page but instead on the category page
// HACK: for now I am just limiting the number of products displayed on the RentOrBuy page in the computed property
</script>