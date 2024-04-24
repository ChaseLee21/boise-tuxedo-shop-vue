<template>
    <div>
        <HeroCarouselMobile v-if="isMobile" />
        <HeroCarousel v-else />
        <GoogleReview />
        <GoogleMap />
    </div>
</template>

<script setup>
import HeroCarouselMobile from './carousel/HeroCarouselMobile.vue';
import HeroCarousel from './carousel/HeroCarousel.vue';
import GoogleMap from './GoogleMap.vue';
import GoogleReview from './GoogleReview.vue';

import { ref } from 'vue';

// USE: this method to determine if the user is on a mobile device
let isMobile = ref(window.innerWidth < 768);
</script>