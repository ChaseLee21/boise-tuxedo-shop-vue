<template>
    <header class="xl:w-[80vw] xl:flex xl:flex-col xl:m-auto mx-2">
        <!-- Medium Devices and Bigger -> Logo + Text -->
        <div v-if="!isMobile" class="grid grid-flow-col grid-cols-3">
            <article class="flex flex-col text-center justify-center m-auto text-xl font-bold">
                <ul>
                    <li class="text-2xl text-red-600">Family Owned and Operated Locally</li>
                    <li>Over 4000 Tuxedo and Suit Styles in Stock</li>
                    <li>Guaranteed Best Prices In The Treasure Valley</li>
                    <li>5 Star Customer Service</li>
                </ul>
            </article>
            <figure class="flex justify-center">
                <img width="300px" height="252px" src="/Tuxedo-Shop-Logo-3.webp">
            </figure>
            <article class="flex flex-col text-center justify-center m-auto text-xl font-bold">
                <ul>
                    <li class="text-2xl text-red-600">3371 N Eagle Rd Suite c130</li>
                    <li>Eagle and Ustick Road</li>
                    <li>Between Kohl's and Dick's Sporting Goods</li>
                    <li>No Appointment Necessary</li>
                </ul>
            </article>
        </div>
        <!-- Mobile -> Logo Only -->
        <figure v-else class="flex justify-center">
            <img width="150px" height="126px" src="/Tuxedo-Shop-Logo-3.webp">
        </figure>
        <!-- Both -->
        <h1 class="text-start text-3xl lg:text-4xl xl:text-5x font-bold" >{{ props.title }}</h1>
        <article>
            <p v-html="props.content" class="text-start md:text-lg lg:text-xl mx-2"></p>
            <nav>
                <ul>
                    <li class="list-inside list-disc mx-2 indent-2" v-for="link in props.links">
                        <router-link class="link" :to="link.url">{{ link.text }}</router-link>
                    </li>
                </ul>
            </nav>
        </article>
    </header>
</template>

<script setup>
import { defineProps, ref } from 'vue';

let isMobile = ref(window.innerWidth < 768);

const props = defineProps({
    title: {
        type: String,
        required: true
    },
    content: {
        type: String,
        required: false
    },
    links: {
        type: Array,
        required: false
    }
});
</script>