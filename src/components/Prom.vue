<template>
    <main class="xl:w-[80vw] xl:flex xl:flex-col xl:m-auto">
        <header class="mb-2">
            <h1 class="text-2xl md:text-3xl lg:text-4xl font-bold underline py-2">Prom 2024</h1>
            <p class="md:text-lg lg:text-xl px-2">
                Prom 2024 season has arrived and Boise Tuxedo Shop is here to help.
                We understand that prom can be stressful, expensive, and time-consuming, but we are here to make it as easy as possible.
                Listed here are some FAQs that are related specifically to prom as well as the dates of proms in the area. 
            </p>
            <p class="md:text-lg lg:text-xl px-2">
                If you have any other questions, feel free to
                <router-link class="text-blue-900 font-bold underline" to="/Contact">contact us</router-link> or 
                <router-link class="text-blue-900 font-bold underline" to="/Faq">view our general FAQs</router-link>.
            </p>
        </header>
        <section>
            <h2 class="text-xl lg:text-2xl font-bold py-2">Prom FAQs</h2>
            <div class="px-2">
                <article>
                    <h3 class="text-2xl text-red-600 font-bold">How soon do I need to reverse my tuxedo or suit?</h3>
                    <p class="indent-3">Ideally 2 to 3 weeks before prom, but we own all of our outfits and can always fit you even the week of prom.</p>
                </article>
                <article>
                    <h3 class="text-2xl text-red-600 font-bold">Do you only rent?</h3>
                    <p class="indent-3">We do both rental and purchase, we carry over 3,000 tuxedos and suits in stock for rental and over 700 suits for purchase.</p>
                </article>
                <article>
                    <h3 class="text-2xl text-red-600 font-bold">How much does it cost to rent a tuxedo or suit for prom?</h3>
                    <p class="indent-3">Pricing changes depending on what style you choose but most styles range from $159 - $175.</p>
                </article>
                <article>
                    <h3 class="text-2xl text-red-600 font-bold">When do I need to pay for my rental?</h3>
                    <p class="indent-3">We only require a 20.00 Deposit at the time you reserve and the balance is paid when you do your final fitting. If you rather pay for it when you reserve it that is okay as well.</p>
                </article>
                <article>
                    <h3 class="text-2xl text-red-600 font-bold">What is included in my tuxedo or suit rental for prom?</h3>
                    <p class="indent-3">The rental price includes 5 pieces:</p>
                    <ol class="list-decimal list-inside indent-6">
                        <li>Jacket</li>
                        <li>Pant</li>
                        <li>Shirt</li>
                        <li>Vest or Suspenders</li>
                        <li>Bowtie or Necktie</li>
                    </ol>
                </article>
                <article>
                    <h3 class="text-2xl text-red-600 font-bold">Do you have shoes availble?</h3>
                    <p class="indent-3">We do offer shoes for rent or purchase.</p>
                </article>
                <article>
                    <h3 class="text-2xl text-red-600 font-bold">How long can we keep it?</h3>
                    <p class="indent-3">Typically if the Prom is on Saturday you will pick it up on Thursday or Friday and return it no later than Monday.</p>
                </article>
                <article>
                    <h3 class="text-2xl text-red-600 font-bold">Are the rentals slim fit and how do the pants generally fit?</h3>
                    <p class="indent-3">Yes, all of our rentals and most all purchase tuxedos and suits are either slim or ultra slim. We also carry an athletic fit as well.</p>
                </article>
            </div>
        </section>
        <section class="">
            <h2 class="text-xl lg:text-2xl font-bold py-2">Prom Dates</h2>
            <article>
                <h3>April 6th</h3>
                <ul class="list-inside indent-3">
                    <li class="indent-6">Capital High School</li>
                    <li class="indent-6">Bishop Kelly High School</li>
                </ul>
            </article>
            <article>
                <h3>April 13th</h3>
                <ul class="list-inside indent-3">
                    <li class="indent-6">Rocky Mountain High School</li>
                </ul>
            </article>
            <article>
                <h3>April 20th</h3>
                <ul class="list-inside indent-3">
                    <li class="indent-6">Owyhee High School</li>
                    <li class="indent-6">Boise High School</li>
                    <li class="indent-6">Borah High School</li>
                    <li class="indent-6">Timberline High School</li>
                    <li class="indent-6">Emmett High School</li>
                    <li class="indent-6">Middleton High School</li>
                </ul>
            </article>
            <article>
                <h3>April 27th</h3>
                <ul class="list-inside indent-3">
                    <li class="indent-6">Centennial High School</li>
                    <li class="indent-6">Meridian High School</li>
                    <li class="indent-6">Mountain View High School</li>
                </ul>
            </article>         
            <article>
                <h3>May 4th</h3>
                <ul class="list-inside indent-3">
                    <li class="indent-6">Eagle High School</li>
                </ul>
            </article>
        </section>
        <FeaturedProducts :products = promProducts :title = prom.title :route = prom.route />
    </main>    
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