<template>
    <div>
        <HeroCarouselMobile v-if="isMobile" />
        <HeroCarousel v-else />
        <Experience />
        <GoogleMap />
    </div>
</template>

<script setup>
import HeroCarouselMobile from '../components/carousel/HeroCarouselMobile.vue';
import HeroCarousel from '../components/carousel/HeroCarousel.vue';
import Experience from '../components/Experience.vue';
import GoogleMap from '../components/GoogleMap.vue';

import { ref } from 'vue';

// USE: this method to determine if the user is on a mobile device
let isMobile = ref(window.innerWidth < 768);
</script>