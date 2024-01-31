<template>
    <div>
        <HeroCarousel />
        <ViewProducts />
        <GoogleMap />
    </div>
</template>
  
<script setup>
import HeroCarousel from './carousel/HeroCarouselMobile.vue';
import ViewProducts from './ViewProducts.vue';
import GoogleMap from './GoogleMap.vue';

//TODO: serve correct herocarousel based on screen size
</script>