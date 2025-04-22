<template>
    <div v-if="isMobile" class="w-full bg-red-600 bg-opacity-75 p-1 relative overflow-hidden">
        <p class="text-lg flex items-center w-fit whitespace-nowrap text-nowrap banner-animate" v-if="bannerText != ''">{{ bannerText }}</p>
    </div>
    <div v-else class="w-full bg-red-600 bg-opacity-75 p-1 text-center text-lg">
        <p v-if="bannerText != ''">{{ bannerText }}</p>
    </div>
</template>

<script setup>
import { ref } from 'vue';

let isMobile = ref(window.innerWidth < 768);

let bannerText = ref("Due to a family wedding on May 23-26 we will be closed. We apologize for any inconvenience this may cause. We will be back open on May 27th. Questions? Call 208-986-2999.");

let additionalMessage = ref("Booking rentals for Weddings and Proms now! Come in today to get complimentary measurements and choose your style from our collection of over 4000 suits and tuxedos!");

</script>

<style scoped>
@keyframes loop {
    0% {transform: translateX(25%);}
    100% {transform: translateX(-75%);}
}

.banner-animate {
    animation: loop 20s linear infinite;
}
</style>