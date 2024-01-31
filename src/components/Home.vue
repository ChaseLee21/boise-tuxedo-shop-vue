<template>
    <div>
        <HeroCarouselMobile v-if="isMobile()"/>
        <HeroCarousel v-else />
        <ViewProducts />
        <GoogleMap />
    </div>
</template>
  
<script setup>
import HeroCarouselMobile from './carousel/HeroCarouselMobile.vue';
import HeroCarousel from './carousel/HeroCarousel.vue';
import ViewProducts from './ViewProducts.vue';
import GoogleMap from './GoogleMap.vue';

const isMobile = () => {
    return window.innerWidth < 768;
}
</script>