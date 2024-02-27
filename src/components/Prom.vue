<template>
    <div class="xl:w-[80vw] xl:flex xl:flex-col xl:m-auto">
        <header class="px-2 md:px-4 lg:px-6">
            <h1 class="text-start text-2xl md:text-3xl lg:text-4xl m-2 font-bold underline">Prom 2024</h1>
        </header>
        <section class="px-2 md:px-4 lg:px-6">
            <h2 class="text-start text-lg md:text-xl lg:text-2xl m-2 font-bold">General Information</h2>
            <p class="text-start md:text-lg lg:text-xl ms-5">
                Prom 2024 season has arrived and Boise Tuxedo Shop is here to help.
                We understand that prom can be stressful, expensive, and time-consuming, but we are here to make it as easy as possible.
                Listed here are some FAQs that are related specifically to prom as well as the dates of proms in the area. 
            </p>
            <p class="text-start md:text-lg lg:text-xl ms-5">
                If you have any other questions, feel free to
                <router-link class="text-blue-900 font-bold underline" to="/Contact">contact us</router-link> or 
                <router-link class="text-blue-900 font-bold underline" to="/Faq">view our general FAQs</router-link>.
            </p>
        </section>
        <section class="px-2 md:px-4 lg:px-6">
            <h2 class="text-start text-lg md:text-xl lg:text-2xl m-2 font-bold">Prom FAQs</h2>
            <ul class="flex flex-col ms-4 my-3">
                <li class="text-2xl text-red-600 font-bold">How soon do I need to reverse my tuxedo or suit?</li>
                <li class="text-lg">Ideally 2 to 3 weeks before prom, but we own all of our outfits and can always fit you even the week of prom.</li>
                
                <li class="text-2xl text-red-600 font-bold">Do you only rent?</li>
                <li class="text-lg">We do both rental and purchase, we carry over 3,000 tuxedos and suits in stock for rental and over 700 suits for purchase.</li>
                
                <li class="text-2xl text-red-600 font-bold">How much does it cost to rent a tuxedo or suit for prom?</li>
                <li class="text-lg">Pricing changes depending on what style you choose but most styles range from $159 - $175.</li>
                
                <li class="text-2xl text-red-600 font-bold">When do I need to pay for my rental?</li>
                <li class="text-lg">We only require a 20.00 Deposit at the time you reserve and the balance is paid when you do your final fitting. If you rather pay for it when you reserve it that is okay as well.</li>

                <li class="text-2xl text-red-600 font-bold">What is included in my tuxedo or suit rental for prom?</li>
                <li class="text-lg">
                    The rental price includes 5 pieces:
                    <ol class="list-decimal list-inside indent-2">
                        <li>Jacket</li>
                        <li>Pant</li>
                        <li>Shirt</li>
                        <li>Vest or Suspenders</li>
                        <li>Bowtie or Necktie</li>
                    </ol>
                </li>
                <li class="text-2xl text-red-600 font-bold">Do you have shoes availble?</li>
                <li class="text-lg">We do offer shoes for rent or purchase.</li>

                <li class="text-2xl text-red-600 font-bold">How long can we keep it?</li>
                <li class="text-lg">Typically if the Prom is on Saturday you will pick it up on Thursday or Friday and return it no later than Monday.</li>

                <li class="text-2xl text-red-600 font-bold">Are the rentals slim fit and how do the pants generally fit?</li>
                <li class="text-lg">Yes, all of our rentals and most all purchase tuxedos and suits are either slim or ultra slim. We also carry an athletic fit as well.</li>
            </ul>
        </section>
        <section class="px-2 md:px-4 lg:px-6">
            <h2 class="text-start text-lg md:text-xl lg:text-2xl m-2 font-bold">Prom Dates</h2>
            <ul class="list-disc list-inside indent-2">
                <li>Placeholder</li>
            </ul>
        </section>
        <FeaturedProducts :products = promProducts :title = prom.title :route = prom.route />
    </div>    
</template>

<script setup>
import FeaturedProducts from './FeaturedProducts.vue';
import jQuery from 'jquery';
import { computed, onMounted, ref } from 'vue';

const $ = jQuery;

const prom = {
    title: "Popular Tuxedos & Suits for Prom 2024",
    route: "Prom"
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

const promProducts = computed(() => {
    let arr = products.value.filter(product => product.type === "Prom");
    while (arr.length > 6) {
        arr.pop();
    }
    return arr;
})

</script>