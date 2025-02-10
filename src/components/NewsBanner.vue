<template>
    <div class="w-full text-center bg-red-600 bg-opacity-75">
        <p class="font-bold" v-if="bannerText != ''">{{ bannerText }}</p>
    </div>
</template>

<script setup>
import { ref } from 'vue';

let isMobile = ref(window.innerWidth < 768);

let bannerText = ref("Booking rentals for Weddings and Proms now! Come in today to get complimentary measurements and choose your style from our collection of over 4000 suits and tuxedos!")

</script>