<template>
    <section class="wrapper flex flex-row overflow-scroll scroll-smooth snap-x snap-mandatory m-0 scroll-m-[1rem]">
        <!-- Carousel -->
        <div class="carousel snap-center flex justify-center items-center flex-row flex-nowrap flex-grow-0 flex-shrink-0 flex-auto relative h-auto w-[100vw] " >
            <!-- Previous Button -->
            <button class="absolute left-0 top-1/2" @click="next()">
                <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" class="stroke-black stroke-2">
                        <line x1="10" y1="25" x2="40" y2="10"></line>
                        <line x1="10" y1="25" x2="40" y2="40"></line> 
                </svg>
            </button>
            <img class="carousel-image h-[100%] w-auto max-w-[100vw] object-cover object-center" v-if="currentImage" :src="currentImage.url" :alt="currentImage.imageAlt">
            <!-- Next Button -->
            <button class="absolute top-1/2 right-0" @click="previous">
                <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" class="stroke-black stroke-2">
                        <line x1="40" y1="25" x2="10" y2="10"></line>
                        <line x1="40" y1="25" x2="10" y2="40"></line> 
                </svg>
            </button>
        </div>
    </section>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import $ from 'jquery';

let images = ref([]);
let carouselIndex = ref(0);
let currentImage = ref(images.value[carouselIndex.value]); // Initialize currentImage as null

const next = () => {
    carouselIndex.value = (carouselIndex.value + 1) % images.value.length;
    currentImage.value = images.value[carouselIndex.value];
};

const previous = () => {
    carouselIndex.value = (carouselIndex.value - 1 + images.value.length) % images.value.length;
    currentImage.value = images.value[carouselIndex.value];
}; 

// USE: this method to retrieve images from the carousel api route
onMounted(async () => {
    await $.ajax({
        url: 'https://boisetuxedoshop.azurewebsites.net/api/carousel',
        type: 'GET',
        error: function (error) {
            console.log(error);
        },
        success: function (data) {
            images.value = data;
            currentImage.value = images.value[carouselIndex.value];
        }
    });
    console.log(images.value);
    console.log(currentImage);
});

</script>