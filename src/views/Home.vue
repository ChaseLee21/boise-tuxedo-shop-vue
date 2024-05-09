<template>
    <Header title = 'Tuxedo and Suits for Rent or Purchase' content = "The Treasure Valley's First Choice for Formal Attire" />
    <main>
        <Experience />
        <HeroCarousel v-if="!isMobile"/>
        <HeroCarouselMobile v-if="isMobile"/>
        <GoogleMap id="googleMaps" />
    </main>
</template>

<script setup>
import HeroCarouselMobile from '../components/carousel/HeroCarouselMobile.vue';
import HeroCarousel from '../components/carousel/HeroCarousel.vue';
import Experience from '../components/Experience.vue';
import GoogleMap from '../components/GoogleMap.vue';
import Header from '../components/Header.vue';
import { ref } from 'vue';

// USE: this method to determine if the user is on a mobile device
let isMobile = ref(window.innerWidth < 768);
</script>