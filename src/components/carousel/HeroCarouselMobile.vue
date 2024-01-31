<template>
    <section class="wrapper flex flex-row overflow-scroll scroll-smooth snap-x snap-mandatory m-0 scroll-m-[1rem]">
        <div class="carousel snap-center flex justify-center items-center flex-row flex-nowrap flex-grow-0 flex-shrink-0 flex-auto relative h-auto w-[100vw] " v-for="(image, index) in images" :key="index">
            <img class="carousel-image h-[100%] w-auto max-w-[100vw] object-cover object-center" :src="image.src" :alt="image.alt">
        </div>
    </section>
</template>

<script setup>
import { ref, reactive, onMounted, onUnmounted } from 'vue';
import $ from 'jquery';

let images = ref([]);

onMounted(() => {
    getImages();
});

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
    console.log(images.value);
}

</script>