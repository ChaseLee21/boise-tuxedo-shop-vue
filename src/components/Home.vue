<template>
    <div>
        <HeroCarouselMobile v-if="isMobile()" :carouselImages = images />
        <HeroCarousel v-else :carouselImages = images />
        <ViewProducts />
        <GoogleMap />
    </div>
</template>

<script setup>
import HeroCarouselMobile from './carousel/HeroCarouselMobile.vue';
import HeroCarousel from './carousel/HeroCarousel.vue';
import ViewProducts from './ViewProducts.vue';
import GoogleMap from './GoogleMap.vue';

import { ref, onMounted } from 'vue';

import $ from 'jquery';

// carousel images served to component
let images = ref([]);

onMounted(() => {
    getImages();
});

// USE: this method to determine if the user is on a mobile device
const isMobile = () => {
    return window.innerWidth < 768;
}

// USE: this method to retrieve images from the carousel api route
const getImages = () => {
    $.ajax({
        url: 'https://boisetuxedoshop.azurewebsites.net/api/carousel',
        type: 'GET',
        success: function (data) {
            validateImages(data);
        },
        error: function (error) {
            console.log(error);
        }
    })
}

// PARAMETERS: data - array of images and their alt text retrieved from the carousel api route
// USE: this method to validate images retrieved from the carousel api route before displaying them to the user
const validateImages = (data) => {
    for (let image of data) {
        let valid = true;
        if (!image.url || ! image.imageAlt || image.url == 'string') valid = false;
        if (valid) images.value.push({ src: image.url, alt: image.imageAlt});
    }
}
</script>