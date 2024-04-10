<template>
    <section class="wrapper flex flex-row overflow-scroll scroll-smooth snap-x snap-mandatory m-0 scroll-m-[1rem]">
        <div v-for="image of images" class="carousel snap-center flex justify-center items-center flex-row flex-nowrap flex-grow-0 flex-shrink-0 flex-auto relative h-auto w-[100vw]" >
            <v-lazy-image width="390" height="235" class="carousel-image h-[100%] w-auto max-w-[100vw] object-cover object-center" :src="image.url" :alt="image.imageAlt"></v-lazy-image>
        </div>
    </section>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import $ from 'jquery';
import VLazyImage from 'v-lazy-image';

let images = ref([]);

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
        }
    });
});
</script>